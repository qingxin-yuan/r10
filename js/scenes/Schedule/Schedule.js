import React, { Component } from "react";
// import Proptypes from "prop-types";

import { ActivityIndicator, ScrollView, Text, View, Image } from "react-native";

import EventList from "../../components/EventList";

import { styles } from "./styles";

const Schedule = ({ events, isLoading }) => {
  // console.log(events);
  return (!isLoading && events.length !== 0) ? <EventList data={events}  /> : <Text> loading...</Text>;
};

export default Schedule;
