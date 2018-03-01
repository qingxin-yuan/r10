import React, { Component } from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { goToSpeaker } from "../../navagation/navigationHelpers";
import {createFave, queryFave} from '../../config/models';
import {HeartIcon} from '../../components/Icons';

const Session = ({ data, speaker }) => {
  console.log(data);
  // render(){
  return (
    <View>
      
      <Text>{data.location}</Text>
      <TouchableOpacity onPress={()=>createFave(data.session_id)} >
     
      <Icon active name={HeartIcon} />
      </TouchableOpacity>
      <Text> {data.title}</Text>
      <TouchableOpacity
        activeOpacity={0.4}
        onPress={() => {
        
          goToSpeaker(speaker)
        }}
      >
        <Text>{speaker.name}</Text>
        
        {/* <Text>{speaker.name}</Text> */}
      </TouchableOpacity>
    </View>
  );
  // }
};

export default Session;
