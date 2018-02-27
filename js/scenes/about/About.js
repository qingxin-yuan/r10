import React, { Component } from "react";
// import Proptypes from "prop-types";

import { Text, View } from "react-native";

import { styles } from "./styles";

const About = () => {
  return (
    <View>
      <Text  style={ styles.text } >I'm on the about scene :)</Text>
    </View>
  );
};

export default About;
