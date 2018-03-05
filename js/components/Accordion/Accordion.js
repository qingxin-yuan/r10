import React, { Component } from "react";
import { LayoutAnimation, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { PlusIcon, MinusIcon } from "../Icons";
import { styles } from "./styles";

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  render() {
    const { title, description } = this.props;
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            LayoutAnimation.easeInEaseOut();
            this.state.open
              ? this.setState({ open: false })
              : this.setState({ open: true });
          }}
          style={{flexDirection: "row"}}
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
