import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import {goToSpeaker} from '../../navagation/navigationHelpers';

const Session = ({ data, speaker }) => {
  // console.log(speaker);
  // render(){
  return (
    <View>
      <Text> {data.title}</Text>
      <TouchableOpacity activeOpacity={0.4} onPress={()=>goToSpeaker(speaker)} >
        <Text>{speaker.name}</Text>
        {/* <Text>{speaker.name}</Text> */}
      </TouchableOpacity>
    </View>
  );
  // }
};

export default Session;
