import React, { Component } from "react";

// import Proptypes from "prop-types";
// import { View,  Text } from "react-native";

import About from "./About";

// import { styles } from "./styles";

export default class AboutContainer extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  static route = {
    navigationBar:{
      title: "About",
    }
  }

  componentDidMount() {
    fetch("https://r10app-95fea.firebaseio.com/code_of_conduct.json")
      .then(res => res.json())
      .then(data => this.setState({ data }))
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return <About data={this.state.data} />;
  }
}
