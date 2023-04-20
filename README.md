# lazyLoadWithRetry
If the file cannot be downloaded during navigation due to an error or network issue, the app may crash as React.lazy fails to import the component. To handle this situation gracefully, it's important to implement proper error handling and retry mechanisms to ensure smooth performance of the application. [react-lazy-load-with-retries](https://www.npmjs.com/package/react-lazy-load-with-retries) will help you fix this issue. 


![react-lazy-load-with-retries](https://user-images.githubusercontent.com/46401220/233241220-6e741c3d-9865-49f9-abf5-5422c330dd61.gif)

## Usage
```js
npm i react-lazy-load-with-retries
```

```js
import { Suspense } from 'react';
import { lazyLoadWithRetries } from 'react-lazy-load-with-retries';

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

