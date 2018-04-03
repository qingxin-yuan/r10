import React, { Component } from "react";
import {
  Animated,
  LayoutAnimation,
  View,
  Text,
  TouchableOpacity,
  Platform,
  UIManager
} from "react-native";
import PropTypes from "prop-types";

import { styles } from "./styles";


class Accordion extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      rotate: new Animated.Value(0)
    };
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  render() {
    const { title, description } = this.props;
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            LayoutAnimation.easeInEaseOut();

            this.state.open
              ? Animated.timing(this.state.rotate, {
                  toValue: 0,
                  duration: 300
                }).start(() => this.setState({ open: !this.state.open }))
              : Animated.timing(this.state.rotate, {
                  toValue: 1,
                  duration: 300
                }).start(() => this.setState({ open: !this.state.open }));
          }}
          style={{ flexDirection: "row" }}
        >
          <Animated.View
            style={[
              {
                transform: [
                  {
                    rotate: this.state.rotate.interpolate({
                      inputRange: [0, 1],
                      outputRange: ["0deg", "360deg"]
                    })
                  }
                ]
              },
              styles.horizontalBar
            ]}
          />

          <Animated.View
            style={[
              {
                transform: [
                  {
                    rotate: this.state.rotate.interpolate({
                      inputRange: [0, 1],
                      outputRange: ["0deg", "270deg"]
                    })
                  }
                ]
              },
              styles.verticalBar
            ]}
          />
          <Text style={[styles.title]}>{title}</Text>
        </TouchableOpacity>
        <Text
          style={[styles.paragraph, { height: this.state.open ? "auto" : 0 }]}
        >
          {description}
        </Text>
      </View>
    );
  }
}

export default Accordion;

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
