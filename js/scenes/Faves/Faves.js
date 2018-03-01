import React, { Component } from "react";
// import Proptypes from "prop-types";

import { ActivityIndicator, ScrollView, Text, View, Image } from "react-native";

import EventList from '../../components/EventList';


import { styles } from "./styles";

const Faves = ({ data }) => <EventList data={data} />
// return

export default Faves;
