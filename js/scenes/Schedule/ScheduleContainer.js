import React, { Component } from "react";

import Schedule from "./Schedule";

export default class ScheduleContainer extends Component {
  constructor() {
    super()
  }

  static route = {
    navigationBar: {
      title: "Schedule",
      tintColor: "green"

    }
  }

  render() {
    return <Schedule />;
  }
}
