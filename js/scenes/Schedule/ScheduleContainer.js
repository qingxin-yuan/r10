import React, { Component } from "react";
import { Router } from "react-native";
import { connect } from "react-redux";

import Schedule from "./Schedule";
import { asyncGetEvents } from "../../redux/modules/event";
import {formatSessionData} from '../../redux/modules/helpers';

class ScheduleContainer extends Component {
  constructor() {
    super();
    // this.goToSession = this.goToSession.bind(this);
  }

  static route = {
    navigationBar: {
      title: "Schedule",
      tintColor: "green"
    }
  };

  componentDidMount() {
    this.props.dispatch(asyncGetEvents());
  }


  render() {
    return (
      <Schedule
        events={formatSessionData(this.props.events)}
        isLoading={this.props.isLoading}
        currentUID={this.props.currentUID}
      />
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.event.isLoading,
  events: state.event.events,
  currentUID: state.navigation.currentNavigatorUID,
});

export default connect(mapStateToProps)(ScheduleContainer);
