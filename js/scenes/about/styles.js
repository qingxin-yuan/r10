import { StyleSheet } from "react-native";
// import { Dimensions } from "react-native";

import {typography, colors} from '../../config/styles';

export const styles = StyleSheet.create({
  // margin: 10
  loader:{
    flex:1,
    justifyContent: "center",
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 15,
    fontFamily: "Montserrat-Light"
  },
  heading:{
    fontSize: 23,
    marginVertical: 5,
    fontFamily: 'Montserrat-Regular',
  },
  textBody: {
    paddingVertical: 20,
    marginHorizontal: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#e6e6e6",
  },
  title: {
    color: "#9963ea",
    fontWeight: "bold",
    fontFamily: "Montserrat-Regular",
    marginVertical: 10,
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
    fontFamily: 'Montserrat-Light',
  }
});
