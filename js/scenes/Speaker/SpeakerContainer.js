import React, { Component } from "react";

import Speaker from "./Speaker";

export default class SpeakerContainer extends Component {
  constructor() {
    super()
  }
  // static route={
  //   navigationBar:{
  //     backgroundColor: 'black',
  //   }
  // }

  render() {
    return <Speaker />;
  }
}
