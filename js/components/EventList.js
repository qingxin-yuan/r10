import React from "react";
import { ListItem, SectionList, Text, View } from "react-native";
import moment from 'moment';

export const EventList = ({ data }) => {
  console.log(data);
  return (
    <View>
      <SectionList
        sections={data}
        renderItem={({ item }) => 
        <View>
        <Text>{item.title}</Text>
        <Text>{item.location}</Text>
        </View>}
        renderSectionHeader={({ section }) => (
          <Text style={{ fontSize: 20, color: "black" }}>
            {moment(section.title).format("LT")}
          </Text>
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};
