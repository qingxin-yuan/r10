import { StyleSheet } from "react-native";
// import { Dimensions } from "react-native";

import { typography, colors } from "../../config/styles";

export const styles = StyleSheet.create({
  title: {
    color: colors.purple,
    fontWeight: "bold",
    fontFamily: typography.fontMain,
    marginVertical: 10,
    marginRight: 10,
    fontSize: 15,
  },
  paragraph: {
    fontSize: 15,
    fontFamily: typography.fontMainLight,
    height: 0
  },

});
