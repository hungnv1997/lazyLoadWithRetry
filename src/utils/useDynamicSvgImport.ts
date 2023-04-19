import React from 'react';
import { useEffect, useRef, useState } from 'react';

export function useDynamicSvgImport(iconName: string) {
    const importedIconRef = useRef<React.FC<React.SVGProps<SVGElement>>>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<unknown>();
    function fetchSvg(svgRoute: string) {
        return new Promise((resolve) => {
            fetch(svgRoute)
                .then((response) => response.text())
                .then((svg) => resolve(svg));
        });
    }
    useEffect(() => {
        setLoading(true);
        // dynamically import the mentioned svg icon name in props
        const importSvgIcon = async (): Promise<void> => {
            let finalLink = iconName[1] === '/' ? iconName.slice(2) : iconName;
            // please make sure all your svg icons are placed in the same directory
            // if we want that part to be configurable then instead of iconName we will send iconPath as prop
            try {
                importedIconRef.current = (await import(`../../src/${finalLink}.svg`)).ReactComponent; // svgr provides ReactComponent for given svg path
                console.log(importedIconRef.current);
            } catch (err) {
                setError(err);
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        importSvgIcon();
    }, [iconName]);

    return { error, loading, SvgIcon: importedIconRef.current };
}
