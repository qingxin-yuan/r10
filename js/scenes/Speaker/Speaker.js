import React from "react";
import {
  Image,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Linking
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";

import { exitSpeaker } from "../../navagation/navigationHelpers";
import GradientButton from "../../components/GradientButton";

import { styles } from "./styles";

const Speaker = ({ speakerData }) => {
  return (
    <ScrollView style={styles.background}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => exitSpeaker()}>
          <Icon active name="ios-close" color="white" size={40} />
        </TouchableOpacity>
        <Text style={styles.headingText}>About the Speaker</Text>
      </View>
      <View style={styles.body}>
        <Image source={{ uri: speakerData.image }} style={styles.image} />
        <Text style={styles.speaker}>{speakerData.name}</Text>
        <Text style={styles.description}>{speakerData.bio}</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL(speakerData.url)}
          style={styles.buttonWrapper}
        >
          <GradientButton text="Read More on Wikipedia" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default Speaker;

Speaker.propTypes = {
  speakerData: PropTypes.object.isRequired
};
