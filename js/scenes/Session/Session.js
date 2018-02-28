import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import {goToSpeaker} from '../../navagation/navigationHelpers';

const Session = ({ data }) => {
  // render(){
  return (
    <View>
      <Text> {data.title}</Text>
      <TouchableOpacity activeOpacity={0.4} onPress={()=>goToSpeaker(data.speaker_id)} >
        <Text>{data.speaker}</Text>
      </TouchableOpacity>
    </View>
  );
  // }
};

export default Session;
