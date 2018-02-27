import React, { Component } from "react";

import Session from "./Session";

export default class SessionContainer extends Component {
  constructor() {
    super()
  }

  static route = {
    navigationBar: {
      title: "Session"
    }
  }

  render() {
    return <Session />;
  }
}
