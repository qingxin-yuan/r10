import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem
} from "@expo/ex-navigation";
import { Router } from "./routes";

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
}

const styles = StyleSheet.create({
  header: {
    height: 20
  },

  selectedItemStyle: {
    backgroundColor: "blue"
  },

  titleText: {
    fontWeight: "bold"
  },

  selectedTitleText: {
    color: "white"
  }
});
