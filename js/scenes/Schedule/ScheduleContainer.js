import React, { Component } from "react";
import { connect } from "react-redux";

import Schedule from "./Schedule";
import {asyncGetEvents} from '../../redux/modules/event';

class ScheduleContainer extends Component {
  constructor() {
    super()
  }

  static route = {
    navigationBar: {
      title: "Schedule",
      tintColor: "green"

    }
  }

  componentDidMount(){
    this.props.dispatch(asyncGetEvents())
  }


  render() {
    return <Schedule events={this.props.events} isLoading={this.props.isLoading} />;
  }
}

const mapStateToProps = state => ({
  isLoading: state.event.isLoading,
  events: state.event.events,
});

export default connect(mapStateToProps)(ScheduleContainer);
