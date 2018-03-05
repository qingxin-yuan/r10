import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem
} from "@expo/ex-navigation";
import Icon from "react-native-vector-icons/Ionicons";

import { Router } from "./routes";
import {colors, typography} from '../config/styles';

// Treat the DrawerNavigationLayout route like any other route -- you may want to set
// it as the intiial route for a top-level StackNavigation

export default class NavigationLayout extends Component {
  static route = {
    navigationBar: {
      visible: false
    }
  };

  render() {
    return (
      <DrawerNavigation
        id="main"
        navigatorUID="main"
        initialItem="schedule"
        drawerWidth={200}
        renderHeader={this._renderHeader}
      >
        <DrawerNavigationItem
          id="schedule"
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle("Schedule", isSelected)}
          renderIcon={isSelected => this.renderIcon(isSelected, "md-calendar")}
        >
          <StackNavigation
            id="schedule"
            initialRoute={Router.getRoute("schedule")}
            navigatorUID="schedule"
          />
        </DrawerNavigationItem>
        <DrawerNavigationItem
          id="faves"
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle("Faves", isSelected)}
          renderIcon={isSelected => this.renderIcon(isSelected, "md-heart")}
        >
          <StackNavigation
            id="faves"
            initialRoute={Router.getRoute("faves")}
            navigatorUID="faves"
          />
        </DrawerNavigationItem>
        <DrawerNavigationItem
          id="about"
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle("About", isSelected)}
          renderIcon={isSelected => this.renderIcon(isSelected, "md-cafe")}
        >
          <StackNavigation
            id="about"
            initialRoute={Router.getRoute("about")}
            navigatorUID="about"
          />
        </DrawerNavigationItem>
      </DrawerNavigation>
    );
  }

  _renderHeader = () => {
    return <View style={styles.header} />;
  };

  _renderTitle(text, isSelected) {
    return (
      <Text
        style={[styles.titleText, isSelected ? styles.selectedTitleText : {}]}
      >
        {text}
      </Text>
    );
  }
  renderIcon = (isSelected, iconName) => (
    <Icon
      active
      name={iconName}
      size={20}
      color={isSelected ? colors.white : colors.mediumGrey}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    height: 20,
    color: colors.black,
  },

  selectedItemStyle: {
    backgroundColor: colors.mediumGrey
  },

  titleText: {
    fontWeight: "bold",
    paddingLeft: 10,
    fontFamily: typography.fontMain,
  },

  selectedTitleText: {
    color: colors.white
  }
});
