import { StyleSheet } from "react-native";

import {typography, colors} from '../../config/styles';

export const styles = StyleSheet.create({
  paragraph: {
    fontSize: 15,
    fontFamily: typography.fontMainLight,
  },
  heading:{
    fontSize: 18,
    marginVertical: 5,
    fontFamily: typography.fontMain,
  },
  textBody: {
    paddingVertical: 20,
    marginHorizontal: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.lightGrey,
    
  },
  title: {
    color: colors.purple,
    fontWeight: "bold",
    fontFamily: typography.fontMain,
    marginVertical: 10,
    fontSize: 15,
  },
  image: {
    marginTop: 30,
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: 'center',
  },
  footer:{
    paddingVertical: 10,
    marginHorizontal: 10,
    fontFamily: typography.fontMainLight
  }
});
