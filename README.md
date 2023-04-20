# lazyLoadWithRetry
If the file cannot be downloaded during navigation due to an error or network issue, the app may crash as React.lazy fails to import the component. To handle this situation gracefully, it's important to implement proper error handling and retry mechanisms to ensure smooth performance of the application. [react-lazy-load-with-retries](https://www.npmjs.com/package/react-lazy-load-with-retries) will help you fix this issue. 

https://user-images.githubusercontent.com/46401220/233223240-747c66ac-c173-4126-800a-d0dc407fe2bb.mp4

## Usage
```js
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
```
## Authors

- [@justinNguyen97](https://github.com/hungnv1997)


## Badges


[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

