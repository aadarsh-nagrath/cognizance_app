import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

const ActiveIcon = ({ style }) => {
  return (
    <Image
      style={[styles.activeIcon, style]}
      resizeMode="cover"
      source={require("../assets/active.png")}
    />
  );
};

const styles = StyleSheet.create({
  activeIcon: {
    width: 50,
    height: 50,
  },
});

export default ActiveIcon;
