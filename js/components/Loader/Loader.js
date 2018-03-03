import React from 'react';
import { View, ActivityIndicator } from "react-native";

import { styles } from "./styles";

const Loader = () => (
  <View style={styles.loader}>
    <ActivityIndicator size="large" color="lightgreen" />
  </View>
);

export default Loader;
