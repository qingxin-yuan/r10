import React, { Component } from "react";
import PropTypes from "prop-types";

import { ActivityIndicator, ScrollView, Text, View, Image } from "react-native";

import { styles } from "./styles";

const About = ({ data, isLoading }) => {
  return !isLoading ? (
    <View>
      <ScrollView>
        <View style={styles.image}>
          <Image source={require(`../../assets/images/r10_logo.png`)} />
        </View>
        <View style={styles.textBody}>
          <Text style={styles.paragraph}>
            R10 is a fake conference where we get together and talk about our
            feelings in app dev.
          </Text>
          <Text style={styles.heading}>Date &amp; Venue</Text>
          <Text style={styles.paragraph} >The R10 takes place at RED Academy on March 15, 2018. </Text>
          <Text style={styles.heading}>Code of Conduct</Text>
          {data.map((item, index) => (
            <View key={index}>
              <Text style={[styles.title, styles.paragraph]}>{item.title}</Text>
              <Text style={styles.paragraph}>{item.description}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.footer}>&copy;RED Academy 2018</Text>
      </ScrollView>
    </View>
  ) : (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color="lightgreen" />
    </View>
  );
};

export default About;

About.proptypes = {
  data: PropTypes.array.isRequired
};
