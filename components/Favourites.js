import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Favourites = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.favourites, style]}
      onPress={() => navigation.navigate("Explore")}
    >
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/favourites.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
  },
  favourites: {
    width: 25,
    height: 23,
  },
});

export default Favourites;
