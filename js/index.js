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
  StackNavigation
} from "@expo/ex-navigation";
import About from "./scenes/About";
import { Router } from "./navagation/routes";

export default class App extends Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute={Router.getRoute("about")} />
      </NavigationProvider>
      // <About />
    );
  }
}
