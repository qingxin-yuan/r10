import React, { Component } from "react";
import { Router } from "react-native";
import { connect } from "react-redux";
import LinearGradient from "../../components/LinearGradient";

import Schedule from "./Schedule";
import { asyncGetEvents } from "../../redux/modules/event";
import { formatSessionData } from "../../redux/modules/helpers";
import { fetchFavesFromDB } from "../../redux/modules/faves";
import { typography, colors } from "../../config/styles";

class ScheduleContainer extends Component {
  constructor() {
    super();
    // this.goToSession = this.goToSession.bind(this);
  }

  static route = {
    navigationBar: {
      title: "Schedule",
      tintColor: colors.white,
      titleStyle: {
        fontFamily: typography.fontMain
      },
      renderBackground: LinearGradient,
    }
  };

  componentDidMount() {
    this.props.dispatch(asyncGetEvents());
    this.props.dispatch(fetchFavesFromDB());
  }

  render() {
    return (
      <Schedule
        events={formatSessionData(this.props.events)}
        isLoading={this.props.isLoading}
        currentUID={this.props.currentUID}
        faves={this.props.faves}
      />
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.event.isLoading,
  events: state.event.events,
  currentUID: state.navigation.currentNavigatorUID,
  faves: state.faves.faves
});

export default connect(mapStateToProps)(ScheduleContainer);
