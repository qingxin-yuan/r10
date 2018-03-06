import React, { Component } from "react";
import {
  Animated,
  Easing,
  LayoutAnimation,
  View,
  Text,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { PlusIcon, MinusIcon } from "../Icons";
import { styles } from "./styles";

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      rotate: new Animated.Value(0)
    };
  }
  render() {
    const { title, description } = this.props;
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            LayoutAnimation.easeInEaseOut();

            Animated.timing(this.state.rotate, {
              toValue: 1,
              duration: 200,
              easing: Easing.elastic(0.2)
            }).start(() => {
              this.setState({ rotate: new Animated.Value(0) });
              this.state.open
                ? this.setState({ open: false })
                : this.setState({ open: true });
            });
          }}
          style={{ flexDirection: "row" }}
        >
          <Animated.View
            style={{
              transform: [
                {
                  rotate: this.state.rotate.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "-360deg"]
                  })
                }
              ]
            }}
          >
            <Text style={[styles.title]}>
              {
                <Icon
                  active
                  name={this.state.open ? MinusIcon : PlusIcon}
                  size={20}
                />
              }
            </Text>
          </Animated.View>
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
