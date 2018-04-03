// eslint-disable-next-line
import React from "react";
import { Platform } from "react-native";
// eslint-disable-next-line
import Icon from "react-native-vector-icons/Ionicons";

export const HeartIcon = 
  Platform.select({
    ios: "ios-heart",
    android: "md-heart"
  });

export const PlusIcon = Platform.select({
  ios: "ios-add",
  android: 'md-add',
})

export const MinusIcon  = Platform.select({
  ios:"ios-remove",
  android: "md-remove",
})
