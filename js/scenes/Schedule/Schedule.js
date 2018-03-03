import React from "react";
import PropTypes from "prop-types";

import { Text } from "react-native";

import EventList from "../../components/EventList";
import Loader from '../../components/Loader/';
// import { formatSessionData } from "../../redux/modules/helpers";

// import { styles } from "./styles";

const Schedule = ({ events, isLoading, currentUID, faves }) => {
  // const data = formatSessionData(events)
  // console.log(events);
  return !isLoading && events.length !== 0 ? (
    <EventList data={events} currentUID={currentUID} faves={faves} />
  ) : (
    Loader()
  );
};

export default Schedule;

Schedule.propTypes = {
  events: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  currentUID: PropTypes.string.isRequired,
  faves: PropTypes.object.isRequired
};
