import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import moment from "moment";
import PropTypes from 'prop-types';

import { goToSpeaker } from "../../navagation/navigationHelpers";
// import { createFave, queryFave } from "../../config/models";
import { HeartIcon } from "../../components/Icons";
import { colors } from "../../config/styles";
import { styles } from "./styles";

const Session = ({ data, speaker, faved }) => {
  // console.log(data);
  // render(){
  return (
    <View style={styles.body}>
      <View style={styles.locationContainer}>
        <Text style={styles.location}>{data.location}</Text>
        {/* <TouchableOpacity onPress={()=>createFave(data.session_id)} > */}

        {faved && <Icon active name={HeartIcon} color={colors.red} />}
      </View>
      {/* </TouchableOpacity> */}
      <Text style={styles.title}> {data.title}</Text>
      <Text style={styles.time}>
        {moment.unix(data.start_time).format("LT")}
      </Text>
      <Text style={styles.description}>{data.description}</Text>
      <Text style={styles.presentedBy}>Presented by: </Text>
      <TouchableOpacity
        activeOpacity={0.4}
        onPress={() => {
          goToSpeaker(speaker);
        }}
        style={styles.presenter}
      >
        <Image source={{uri:speaker.image}} style={styles.image}/>
        <Text style={styles.presenterName} >{speaker && speaker.name}</Text>

        {/* <Text>{speaker.name}</Text> */}
      </TouchableOpacity>
    </View>
  );
  // }
};

export default Session;

Session.propTypes = {
  data: PropTypes.object.isRequired,
  speaker: PropTypes.object.isRequired,
  faved: PropTypes.bool.isRequired,
}
