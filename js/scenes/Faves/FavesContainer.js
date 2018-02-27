import React, { Component } from "react";

import Faves from "./Faves";

export default class FavesContainer extends Component {
  constructor() {
    super()
  }

  static route = {
    navigationBar: {
      title: "Favourites"
    }
  }

  render() {
    return <Faves />;
  }
}
