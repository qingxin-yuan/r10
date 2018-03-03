import React, { Component } from "react";
import PropTypes from "prop-types";

import { ActivityIndicator, ScrollView, Text, View, Image } from "react-native";

import EventList from "../../components/EventList";
import { formatSessionData } from "../../redux/modules/helpers";

import { styles } from "./styles";

const Schedule = ({ events, isLoading, currentUID, faves }) => {
  // const data = formatSessionData(events)
  // console.log(events);
  return !isLoading && events.length !== 0 ? (
    <EventList data={events} currentUID={currentUID} faves={faves} />
  ) : (
    <Text> loading...</Text>
  );
};

export default Schedule;

Schedule.propTypes = {
  events: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  currentUID: PropTypes.string.isRequired,
  faves: PropTypes.object.isRequired
};
