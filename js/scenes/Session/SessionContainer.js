import React, { Component } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { formatDataObject } from "../../redux/modules/helpers";
import { fetchFavesFromDB } from "../../redux/modules/faves";
import { deleteFave, createFave } from "../../config/models";
import Session from "./Session";
import GradientButton from "../../components/GradientButton";
import LinearGradient from "../../components/LinearGradient";
import { typography, colors } from "../../config/styles";

class SessionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      status: "",
      faved: false
    };
    this.updateFaves = this.updateFaves.bind(this);
  }

  static route = {
    navigationBar: {
      title: "Session",
      tintColor: colors.white,
      titleStyle: {
        fontFamily: typography.fontMain
      },
      renderBackground: LinearGradient
    }
  };

  updateFaves = () => {
    const sessionId = this.props.route.params.sessionData.session_id;
    this.props.dispatch(fetchFavesFromDB());
    const faves = this.props.faves;

    if (faves[sessionId] === "exists") {
      deleteFave(sessionId);
      this.setState({ status: "Add to ", faved: false });
    } else {
      createFave(sessionId);
      this.setState({ status: "Remove from ", faved: true });
    }

    this.props.dispatch(fetchFavesFromDB());
  };

  componentDidMount() {
    fetch(
      `https://r10app-95fea.firebaseio.com/speakers.json?orderBy="speaker_id"&equalTo="${
        this.props.route.params.sessionData.speaker
      }"`
    )
      .then(res => res.json())
      .then(data => {
        data = formatDataObject(data);
        this.props.dispatch(fetchFavesFromDB());
        const sessionId = this.props.route.params.sessionData.session_id;
        const faves = this.props.faves;
        if (faves[sessionId] === "exists") {
          this.setState({ status: "Remove from ", faved: true });
        } else {
          this.setState({ status: "Add to ", faved: false });
        }
        this.setState({ data });
      })
      // eslint-disable-next-line
      .catch(err => console.log(err));
  }

  render() {
    return (
      <ScrollView>
        <Session
          data={this.props.route.params.sessionData}
          speaker={this.state.data}
          faved={this.state.faved}
        />
        <View style={{justifyContent: "center", alignItems: "center"}}>
          <TouchableOpacity
            onPress={() => this.updateFaves()}
            style={{ width: 250 }}
          >
            <GradientButton text={`${this.state.status} to Favourites`} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  faves: state.faves.faves
});

export default connect(mapStateToProps)(SessionContainer);

SessionContainer.propTypes = {
  route: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  faves: PropTypes.object.isRequired
};
