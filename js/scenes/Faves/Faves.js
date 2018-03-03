import React from "react";
import PropTypes from "prop-types";

// import {  ScrollView, Text, View, Image } from "react-native";

import EventList from '../../components/EventList';


// import { styles } from "./styles";

const Faves = ({ data, currentUID, faves }) => <EventList data={data} currentUID={currentUID} faves={faves} />
// return

export default Faves;

Faves.propTypes = {
  data: PropTypes.array.isRequired,
  currentUID: PropTypes.string.isRequired,
  faves: PropTypes.object.isRequired,
}

Faves.defaultProps = {
  data: [],
  currentUID: "",
  faves: {}
}