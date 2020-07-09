My ReactNative app. 
In this project contains components and pages templates, 
also contains work with sqllite database templates.

All examples in code, the sequence of actions can be tracked by commits!

I wanted to use React inside Ionic, 
but almost all components awful works with React and even doesn't work, 
also console commands doesn't work. Angular tool that is not worse than React.

### `JULY 2020`

### `learning difficulty level: 6 of 10`

I start my template with [This good template](https://aboutreact.com/example-of-sqlite-database-in-react-native/)

But this template with `classes` and I remake this to functions


## Installed dependences

When download or clone App:

    npm install

All:

    npm install react-navigation --save
    npm install react-native-gesture-handler react-native-safe-area-context @react-native-community/masked-view react-native-screens react-native-reanimated --save
    npm install react-navigation-stack --save
        
    npm install react-native-localization --save


## Run the app

    react-native run-android

## Localization 

- Localization to headers working if header titles are not set inside App.js
- When used live reload localization is crushed for headers, but in App it will be work.
- `props.navigation.navigate('Home', {token: '<new token>'});` this `new token` needs to reload screen
