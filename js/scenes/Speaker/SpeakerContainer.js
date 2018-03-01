import React, { Component } from "react";

import Speaker from "./Speaker";

export default class SpeakerContainer extends Component {
  constructor(props) {
    super(props);
  }
  // static route={
  //   navigationBar:{
  //     backgroundColor: 'black',
  //   }
  // }

  render() {
    // console.log(this.props.route.params.speakerData)
    return <Speaker speakerData={this.props.route.params.speakerData} />;
  }
}
