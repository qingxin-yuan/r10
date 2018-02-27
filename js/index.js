/**
 * R10 React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
// import {
//   Text,
//   View
// } from 'react-native';

import {
  // createRouter,
  NavigationProvider,
  NavigationContext,
  StackNavigation
} from "@expo/ex-navigation";
import About from "./scenes/About";
import { Router } from "./navagation/routes";
import Store from "./redux/store";
import { Provider } from "react-redux";

const navigationContext = new NavigationContext({
  router: Router,
  store: Store
});

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <NavigationProvider context={navigationContext}>
          <StackNavigation initialRoute={Router.getRoute("about")} />
        </NavigationProvider>
      </Provider>
    );
  }
}
