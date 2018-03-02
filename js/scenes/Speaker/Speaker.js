import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import {exitSpeaker} from '../../navagation/navigationHelpers';

import { styles } from "./styles";

const Speaker = ({ speakerData }) => {
  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>exitSpeaker()} >
          <Icon active name="ios-close" color="white" size={40} />
        </TouchableOpacity>
        <Text style={styles.headingText}>{speakerData.name}</Text>
      </View>
      <View style={styles.body}>
        <Image source={{ uri: speakerData.image }} style={styles.image} />
        <Text>{speakerData.bio}</Text>
      </View>
    </View>
  );
};
export default Speaker;
