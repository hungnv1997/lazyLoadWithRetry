import { Suspense } from 'react';
import { lazyLoadWithRetries } from './lib';

// import MyButton from './lib/MyButton';
import SvgIcon from './lib/SvgIcon';
function App() {
    const MyButton = lazyLoadWithRetries(()=> import('./lib/MyButton'))
    return (
        <>
            <SvgIcon
                iconName="./react"
                svgProp={{
                    className: 'logo',
                    width: 100,
                    height: 100,
                    fill: '#61dafb',
                }}
            />
            <Suspense fallback="<div>Loading</div>">
            <MyButton>Click me</MyButton>
            </Suspense>
        </>
    );
}


export default App;
