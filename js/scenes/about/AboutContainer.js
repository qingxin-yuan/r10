import React, { Component } from "react";
import { connect } from "react-redux";

// import Proptypes from "prop-types";
// import { View,  Text } from "react-native";

import About from "./About";
import {colors, typography} from '../../config/styles';
import LinearGradient from '../../components/LinearGradient';

import { getCodeOfConduct } from "../../redux/modules/about";


class AboutContainer extends Component {
  // constructor() {
  //   super();
  //   this.state = { data: [] };
  // }

  static route = {
    navigationBar: {
      title: "About",
      titleStyle: {
        fontFamily: typography.fontMain,
      },
      tintColor: colors.white,
      renderBackground: LinearGradient,

    }
  };

  componentDidMount() {
    this.props.dispatch(getCodeOfConduct())
  }

  render() {
    return <About data={this.props.COC} isLoading={this.props.isLoading} />;
  }
}

const mapStateToProps = state => ({
  isLoading: state.about.isLoading,
  COC: state.about.COC,
});

export default connect(mapStateToProps)(AboutContainer);