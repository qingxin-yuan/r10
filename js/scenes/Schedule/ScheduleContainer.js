import React, { Component } from "react";
import { Router } from "react-native";
import { connect } from "react-redux";
import LinearGradient from "react-native-linear-gradient";

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
      renderBackground: () => (
        <LinearGradient
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 1.0, y: 0.0 }}
          // locations={[0, 0.5, 0.6]}
          colors={[colors.red, colors.purple]}
          // height={1}
          style={{flex:1}}
          // style={styles.linearGradient}
        />
      )
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
