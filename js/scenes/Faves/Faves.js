import React, { Component } from "react";
// import Proptypes from "prop-types";

import { ActivityIndicator, ScrollView, Text, View, Image } from "react-native";

import { styles } from "./styles";

const Faves = ({ data }) => {
  // console.log(data[1].id);
  const faves = [];
  data.map((item, key) => faves.push(item.id));
  console.log(faves);
  return <Text>{faves}</Text>;
  // return null;
};
// return

export default Faves;
