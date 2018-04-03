import React from 'react';

import LinearGradient from "react-native-linear-gradient";

import { colors } from "../config/styles";

const linearGradient = () => (
  <LinearGradient
    start={{ x: 0.0, y: 1.0 }}
    end={{ x: 1.0, y: 0.0 }}
    colors={[colors.red, colors.purple]}
    style={{ flex: 1 }}
  />
);

export default linearGradient;
