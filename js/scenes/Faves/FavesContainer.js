import React, { Component } from "react";
import { connect } from "react-redux";

import Faves from "./Faves";
import realm, { queryFave } from "../../config/models";
import {formatSessionData} from '../../redux/modules/helpers';

class FavesContainer extends Component {
  constructor() {
    super();
  }

  static route = {
    navigationBar: {
      title: "Favourites"
    }
  };

  render() {
    console.log(realm.path);
    const data = queryFave();
    const faves = {};
    data.map((item, key) => faves[item.id] = "exists");
    console.log(faves);
    
    let events = this.props.events;

    events = events.filter(event=>{
      console.log(faves[event.session_id])
      if (faves[event.session_id] === "exists"){
        return true;
      }
    })

    console.log(events);
    events = formatSessionData(events);
    return <Faves data={events} />;
  }
}

const mapStateToProps = state => ({
  events: state.event.events
});

export default connect(mapStateToProps)(FavesContainer);
