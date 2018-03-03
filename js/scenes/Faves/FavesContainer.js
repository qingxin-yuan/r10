import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Faves from "./Faves";
import realm, { queryFave } from "../../config/models";
import { formatSessionData } from "../../redux/modules/helpers";
import { fetchFavesFromDB } from "../../redux/modules/faves";
import { colors, typography } from "../../config/styles";
import LinearGradient from "../../components/LinearGradient";

class FavesContainer extends Component {
  constructor() {
    super();
  }

  static route = {
    navigationBar: {
      title: "Favourites",
      tintColor: colors.white,
      titleStyle: {
        fontFamily: typography.fontMain
      },
      renderBackground: LinearGradient
    }
  };

  componentDidMount() {
    this.props.dispatch(fetchFavesFromDB());
  }

  render() {
    // realm.addListener('change', this.props.dispatch(fetchFavesFromDB))
    console.log(realm.path);
    // const data = queryFave();
    // const faves = {};
    // data.map((item, key) => faves[item.id] = "exists");
    // console.log(faves);
    const faves = this.props.faves;
    let events = this.props.events;

    events = events.filter(event => {
      // console.log(faves[event.session_id])
      if (faves[event.session_id] === "exists") {
        return true;
      }
    });

    console.log(events);
    events = formatSessionData(events);

    // console.log(this.props.currentUID)
    return (
      <Faves data={events} currentUID={this.props.currentUID} faves={faves} />
    );
  }
}

const mapStateToProps = state => ({
  events: state.event.events,
  faves: state.faves.faves,
  currentUID: state.navigation.currentNavigatorUID
});

export default connect(mapStateToProps)(FavesContainer);

FavesContainer.propTypes = {
  faves: PropTypes.object.isRequired,
  events: PropTypes.array.isRequired,
  currentUID: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

FavesContainer.defaultProps = {
  faves: {},
  events: [],
  currentUID: "",
}