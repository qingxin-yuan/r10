import React, { Component } from "react";
import Proptypes from 'prop-types';

import About from './About';


export default class AboutContainer extends Component{
  constructor(){
    super();
    this.state= {}
  }
  render(){
    return <About />
  }
}