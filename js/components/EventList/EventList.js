import React, { Component } from "react";
import {
  SectionList,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import moment from "moment";
import Icon from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";

import { goToSession } from "../../navagation/navigationHelpers";
import styles from "./styles";
import { HeartIcon } from "../Icons";
import { colors } from "../../config/styles";

const EventList = ({ data, currentUID, faves }) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: props.data
  //   };
  // }
  // render() {
  // console.log(faves[data.session_id]);

  return (
    <View>
      <SectionList
        sections={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => goToSession(currentUID, item)}
            activeOpacity={0.7}
          >
            <View style={styles.textContainer}>
              <Text style={styles.textHeading}>{item.title}</Text>
              <View style={styles.heartContainer}>
                <Text style={styles.text}>{item.location}</Text>
                {faves[item.session_id] === "exists" && (
                  <Icon active name={HeartIcon} color={colors.red} />
                )}
              </View>
            </View>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.time}>
            {moment.unix(section.title).format("LT")}
          </Text>
        )}
        keyExtractor={(item, index) => index}
        stickySectionHeadersEnabled={false}
      />
    </View>
  );
  // }
};

export default EventList;

EventList.propTypes = {
  data: PropTypes.array.isRequired,
  currentUID: PropTypes.string.isRequired,
  faves: PropTypes.object.isRequired
};
EventList.defaultProps = {
  data: [],
  currentUID: "",
  faves: {},
}
