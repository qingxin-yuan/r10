import React, { Component } from "react";
import { Image } from "react-native";
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem
} from "@expo/ex-navigation";
import { Router } from "./routes";

export default class NavigationLayout extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      // put the tab bar/tab items/ stack navs here
      <TabNavigation id="main" navigatorUID="main" initialTab="about">
        <TabItem
          id="about"
          title="about"
          // selectedStyle={styles.selectedTab}
          renderIcon={isSelected => (
            <Image source={require("../assets/images/r10_logo.png")} />
          )}
        >
          <StackNavigation
            id="about"
            navigatorUID="about"
            initialRoute={Router.getRoute("about")}
          />
        </TabItem>
        <TabItem
          id="faves"
          title="faves"
          // selectedStyle={styles.selectedTab}
          renderIcon={isSelected => (
            <Image source={require("../assets/images/r10_logo.png")} />
          )}
        >
          <StackNavigation
            id="faves"
            navigatorUID="faves"
            initialRoute={Router.getRoute("faves")}
          />
        </TabItem>
      </TabNavigation>
    );
  }
}
