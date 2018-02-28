import React, { Component } from "react";
import { Text, View } from "react-native";

import Session from "./Session";

export default class SessionContainer extends Component {
  constructor(props) {
    super(props);
  }

  static route = {
    navigationBar: {
      title: "Session"
      // title(params) {
      //   return params.sessionData.title;
      // }
    }
  };

  render() {
    console.log("worrrrrrd")
    console.log(this.props.route.params.sessionData);
    return (
      <View>
        {/* <Text> {this.props.route.params.sessionData} </Text> */}
        <Session data={this.props.route.params.sessionData} />
      </View>
    );
  }
}
