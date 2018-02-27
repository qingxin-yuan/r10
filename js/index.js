/**
 * R10 React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";

import {
  NavigationProvider,
  NavigationContext,
  StackNavigation
} from "@expo/ex-navigation";
import { Provider } from "react-redux";

import About from "./scenes/About";
import { Router } from "./navagation/routes";
import Store from "./redux/store";


const navigationContext = new NavigationContext({
  router: Router,
  store: Store
});

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <NavigationProvider context={navigationContext}>
          <StackNavigation initialRoute={Router.getRoute("layout")} />
        </NavigationProvider>
      </Provider>
    );
  }
}
