# R10
An example conference schdule app using React Native, both IOS & Android supported.

## Installation
1. Download the project, run `> npm install`

2. To run IOS, run `> react-native run-ios`  
To save computing power, run on iPhone SE model using `> react-native run-ios --simulator "iPhone SE"`

3. To run Android, make sure to install Android Studio and follow the config on [a link](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies)  
After the config, start the packager and then run from Android Studio using the Run button.

## Features
1. Using expo-navigation for navigation stack integration
2. Use Redux for global states storage
3. Using Realm as database
4. Use react-native-linear-gradient for gradient styling

## Some Gotchas
1. Add additional stackNavigation can selectively display tabBar, to satisfy various design needs
2. onPress functionality exsits only on certain react native components, like TouchableOpacity, Button, not on View or Text

## Author
**Qingxin Yuan**

## Future Directions
1. Add animation onto About scene
2. Add map integration