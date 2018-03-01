import React, { Component } from "react";
import { Image, Text } from "react-native";
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem
} from "@expo/ex-navigation";
import Icon from "react-native-vector-icons/Ionicons";

import { Router } from "./routes";

import { colors, typography } from "../config/styles";

const { black, mediumGrey, white } = colors;

export default class NavigationLayout extends Component {
  // constructor() {
  //   super();
  // }

  renderTitleColor = (isSelected, title) => {
    return (
      <Text
        style={{
          color: isSelected ? white : mediumGrey,
          fontFamily: typography.fontMain,
          fontSize: 12
        }}
      >
        {title}
      </Text>
    );
  };
  renderIcon = (isSelected, iconName) => (
    <Icon
      active
      name={iconName}
      size={20}
      color={isSelected ? white : mediumGrey}
    />
  );

  render() {
    return (
      <TabNavigation
        id="main"
        navigatorUID="main"
        initialTab="about"
        tabBarColor={black}
      >
        <TabItem
          id="schedule"
          title="Schedule"
          renderTitle={this.renderTitleColor}
          renderIcon={isSelected => this.renderIcon(isSelected, "ios-calendar")}
        >
          <StackNavigation
            id="schedule"
            navigatorUID="schedule"
            initialRoute={Router.getRoute("schedule")}
          />
        </TabItem>
        <TabItem
          id="faves"
          title="Faves"
          renderTitle={this.renderTitleColor}
          renderIcon={isSelected => this.renderIcon(isSelected, "ios-heart")}
        >
          <StackNavigation
            id="faves"
            navigatorUID="faves"
            initialRoute={Router.getRoute("faves")}
          />
        </TabItem>
        <TabItem
          id="about"
          title="About"
          renderTitle={this.renderTitleColor}
          renderIcon={isSelected => this.renderIcon(isSelected, "ios-cafe")}
        >
          <StackNavigation
            id="about"
            navigatorUID="about"
            initialRoute={Router.getRoute("about")}
          />
        </TabItem>
      </TabNavigation>
    );
  }
}
