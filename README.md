# React Native Redux

*A task reminder App*

Add a task, fill the information, keep it, update it, remove it.

## Stack

This app uses `Redux` to manage state and `redux-saga` to handle async/side effects. `AsyncStorage` to persist state. `React Navigation` to navigate and `React Native Elements` as UI kit.

## Scripts

```
Lifecycle scripts included in nativeRedux:
  start
    react-native start
  test
    jest

available via `npm run-script`:
  android
    react-native run-android
  ios
    react-native run-ios
  lint
    eslint .
  generateApk
    cd android && ./gradlew assembleRelease
```

## Main `index.js`
inits the app and registers the component, it contains the `AppNavigator` that defines our screens and components to be mounted in each, the rest of the code is located under `src`

## The `src` folder
```
└── src
    ├── components
    │   ├── EditButton.js
    │   ├── Footer.js
    │   ├── Task.js
    │   └── TaskList.js
    ├── core
    │   ├── actions.js
    │   ├── constants.js
    │   ├── reducer.js
    │   ├── sagas.js
    │   └── store.js
    ├── screens
    │   ├── Create.js
    │   ├── Details.js
    │   └── Home.js
    ├── services
    │   ├── NavigationService.js
    │   └── storage.js
    ├── styles
    │   ├── icons.js
    │   └── styles.js
    └── utilities
        └── validation.js
```





