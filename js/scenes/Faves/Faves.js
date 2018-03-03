import React, { Component } from "react";
// import Proptypes from "prop-types";

import { ActivityIndicator, ScrollView, Text, View, Image } from "react-native";

import EventList from '../../components/EventList';


import { styles } from "./styles";

const Faves = ({ data, currentUID, faves }) => <EventList data={data} currentUID={currentUID} faves={faves} />
// return

export default Faves;
