import React, { Component } from "react";
import { Text, View } from "react-native";

import { formatDataObject } from "../../redux/modules/helpers";
import Session from "./Session";

export default class SessionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  static route = {
    navigationBar: {
      title: "Session"
      // title(params) {
      //   return params.sessionData.title;
      // }
    }
  };

  componentDidMount() {
    fetch(
      `https://r10app-95fea.firebaseio.com/speakers.json?orderBy="speaker_id"&equalTo="${this.props.route.params.sessionData.speaker}"`
    )
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        data = formatDataObject(data);
        // console.log(speaker);
        this.setState({ data });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.data);
    console.log(this.props.route.params.sessionData.speaker);
    return (
      <View>
        {/* <Text> {this.props.route.params.sessionData} </Text> */}
        <Session
          data={this.props.route.params.sessionData}
          speaker={this.state.data}
        />
      </View>
    );
  }
}
