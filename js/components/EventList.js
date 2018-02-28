import React, { Component } from "react";
import {
  // ListItem,
  SectionList,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import moment from "moment";

import { goToSession } from "../navagation/navigationHelpers";

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
  }
  render() {
    console.log(this.state.data);
    return (
      <View>
        <SectionList
          sections={this.state.data}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={()=>goToSession("schedule", item)}
              activeOpacity={0.7}
            >
              <View>
                <Text>{item.title}</Text>
                <Text>{item.location}</Text>
              </View>
            </TouchableOpacity>
          )}
          renderSectionHeader={({ section }) => (
            <Text style={{ fontSize: 20, color: "black" }}>
              {moment.unix(section.title).format("LT")}
            </Text>
          )}
          keyExtractor={(item, index) => index}
          stickySectionHeadersEnabled={false}
        />
      </View>
    );
  }
}

export default EventList;
