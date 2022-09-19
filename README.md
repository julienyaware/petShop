## Scope

The idea of the assignment is to develop an app that displays different types of ```pets on a filter page```.

* On this page, each pet profile should contain an ```avatar picture, pet name, and a view option```
* On the top of the filter page there should be a ```search option```, which performs a fuzzy search operation to filter pet results on the fly
* Use React hooks (if possible)
* State management (like redux, mobx, or recoil etc.) to store and share the data
* Application should be responsive
* Make it accessible and use Semantic HTML
* Use proper CSS naming conventions
* Make your components reusable (Styled components)
* Fetch data from given REST API endpoint
* Ensure it works on modern browsers
* At the bottom of the page you should show different ```categories``` for the pets
* Support for ```screen readers```

Note: All the information for your application can be obtained from REST API endpoint which are mentioned below.

## What to expect 

![image](https://user-images.githubusercontent.com/13431164/190981465-ce11c889-08ff-4f4d-ac9f-1328f7825c52.png)

![image](https://user-images.githubusercontent.com/13431164/190981557-7fd19aad-2818-4f06-a3b5-895990954a6f.png)

## API specifics
All pet profile data is to be fetched from the following API endpoint:

### Pet results API
```
Method: GET
URL: https://61f6e0072e1d7e0017fd6f82.mockapi.io/api/v1/pets
```

### Tools Used

- React
- Redux
- Fuse.js


## Usage

### Global dependencies

Make sure you have Node 14 installed. The project supports nvm:

-   [Node.js](https://nodejs.org/)
-   [Yarn](https://yarnpkg.com/)
-   [nvm](https://github.com/nvm-sh/nvm)

### Install dependencies

```
yarn
```

### Run development server

```
yarn start
```

Will open your default browser to  [http://localhost:3000](http://localhost:3000).

Webpack will watch for changes in the `./src` directory.

### Build production bundles

```
yarn build
```

Will compile and minify. Will Minify and uglify JavaScript and output the bundled assets to  `./build`.

