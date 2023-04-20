import { Suspense } from 'react';
import { lazyLoadWithRetries } from './lib';

function App() {
    const MyButton = lazyLoadWithRetries(()=> import('./lib/MyButton'))
    return (
        <>
            <Suspense fallback="<div>Loading</div>">
            <MyButton/>
            </Suspense>
        </>
    );
}


export default App;
