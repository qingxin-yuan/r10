import React from "react";
import PropTypes from "prop-types";
import {
  ScrollView,
  Text,
  View,
  Image,
} from "react-native";

import logo from "../../assets/images/r10_logo.png";
import Loader from "../../components/Loader";
import Accordion from '../../components/Accordion';
import { styles } from "./styles";

const About = ({ data, isLoading }) => {
  // let height = "auto";
  return !isLoading ? (
    <View>
      <ScrollView>
        <View style={styles.image}>
          <Image source={logo} />
        </View>
        <View style={styles.textBody}>
          <Text style={styles.paragraph}>
            R10 is a fake conference where we get together and talk about our
            feelings in app dev.
          </Text>
          <Text style={styles.heading}>Date &amp; Venue</Text>
          <Text style={styles.paragraph}>
            The R10 takes place at RED Academy on March 15, 2018.
          </Text>
          <Text style={styles.heading}>Code of Conduct</Text>
          {data.map((item, index) => (
            <Accordion 
            key={index}
            title={item.title}
            description={item.description}
            />
          ))}
        </View>

        <Text style={styles.footer}>&copy;RED Academy 2018</Text>
      </ScrollView>
    </View>
  ) : (
    Loader()
  );
};

export default About;

About.propTypes = {
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
};
