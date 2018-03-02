import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import { connect } from "react-redux";

import { formatDataObject } from "../../redux/modules/helpers";
import { fetchFavesFromDB } from "../../redux/modules/faves";
import realm, {deleteFave, createFave} from '../../config/models'; 
import Session from "./Session";


class SessionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      status: ""
    };
    this.updateFaves = this.updateFaves.bind(this);
  }

  static route = {
    navigationBar: {
      title: "Session"
      // title(params) {
      //   return params.sessionData.title;
      // }
    }
  };

  updateFaves = () => {
    const sessionId = this.props.route.params.sessionData.session_id;
    const faves = this.props.faves;
    if (faves[sessionId] === "exists") {
      deleteFave(sessionId);
      this.setState({ status: "Add to " });

    } else {
      createFave(sessionId);
      this.setState({ status: "Remove from " });
    }
  };

  componentDidMount() {
    fetch(
      `https://r10app-95fea.firebaseio.com/speakers.json?orderBy="speaker_id"&equalTo="${
        this.props.route.params.sessionData.speaker
      }"`
    )
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        data = formatDataObject(data);
        this.props.dispatch(fetchFavesFromDB());
        const sessionId = this.props.route.params.sessionData.session_id;
        const faves = this.props.faves;
        if (faves[sessionId] === "exists") {
          this.setState({ status: "Remove from " });
        } else {
          this.setState({ status: "Add to " });
        }
        // this.updateFaves();
        // console.log(speaker);
        this.setState({ data });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(realm.path);
    console.log(this.state.status);
    // console.log(this.state.data);
    // console.log(this.props.route.params.sessionData.speaker);
    return (
      <View>
        {/* <Text> {this.props.route.params.sessionData} </Text> */}
        <Session
          data={this.props.route.params.sessionData}
          speaker={this.state.data}
        />
        <Button
          onPress={() => this.updateFaves()}
          title={`${this.state.status}Favourites`}
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  faves: state.faves.faves
});

export default connect(mapStateToProps)(SessionContainer);
