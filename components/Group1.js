import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

const GroupIcon1 = ({ style }) => {
  return (
    <Image
      style={[styles.groupIcon, style]}
      resizeMode="cover"
      source={require("../assets/group-1.png")}
    />
  );
};

const styles = StyleSheet.create({
  groupIcon: {
    width: 50,
    height: 50,
  },
});

export default GroupIcon1;
