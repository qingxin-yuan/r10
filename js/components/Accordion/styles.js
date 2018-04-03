import { StyleSheet } from "react-native";

import { typography, colors } from "../../config/styles";

export const styles = StyleSheet.create({
  title: {
    color: colors.purple,
    fontWeight: "bold",
    fontFamily: typography.fontMain,
    marginVertical: 10,
    marginRight: 10,
    fontSize: 15,
    paddingLeft: 15
  },
  paragraph: {
    fontSize: 15,
    fontFamily: typography.fontMainLight,
    height: 0
  },
  horizontalBar: {
    width: 10,
    height: 1,
    position: "absolute",
    left: 1,
    top: 18,
    backgroundColor: colors.purple
  },
  verticalBar: {
    height: 10,
    width: 1,
    backgroundColor: colors.purple,
    left: 5.5,
    top: 14
  }
});
