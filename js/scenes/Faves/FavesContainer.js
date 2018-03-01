import React, { Component } from "react";

import Faves from "./Faves";
import realm, {queryFave} from '../../config/models';


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
    const data = queryFave();
    // console.log(realm.objects('Faves'));
    return <Faves data={data}/>;
  }
}
