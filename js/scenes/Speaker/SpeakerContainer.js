import React, { Component } from "react";
import PropTypes from "prop-types";

import Speaker from "./Speaker";

export default class SpeakerContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Speaker speakerData={this.props.route.params.speakerData} />;
  }
}

SpeakerContainer.propTypes = {
  route: PropTypes.object.isRequired
}
