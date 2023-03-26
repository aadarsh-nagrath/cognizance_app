import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Explore = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.explore, style]}
      onPress={() => navigation.navigate("Game")}
    >
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/explore.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
  },
  explore: {
    width: 25,
    height: 26,
  },
});

export default Explore;
