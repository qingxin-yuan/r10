import React from "react";
import { Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export const HeartIcon = 
  Platform.select({
    ios: "ios-heart",
    android: "md-heart"
  });
