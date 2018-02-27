import { StyleSheet } from "react-native";
// import { Dimensions } from "react-native";

// const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  // margin: 10
  loader:{
    flex:1,
    justifyContent: "center",
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 15
  },
  heading:{
    fontSize: 23,
    marginVertical: 5,
  },
  textBody: {
    paddingVertical: 20,
    marginHorizontal: 10,
    borderTopWidth: 1,
    // borderTopColor: "#e6e6e6",
    borderBottomWidth: 1,
    borderColor: "#e6e6e6",
  },
  title: {
    color: "#9963ea",
    fontWeight: "bold",
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
  }
});
