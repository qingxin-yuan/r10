import React from "react";
import PropTypes from "prop-types";

import EventList from "../../components/EventList";
import Loader from "../../components/Loader/";

const Schedule = ({ events, isLoading, currentUID, faves }) => {
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
