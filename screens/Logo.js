import * as React from "react";
import { Image, StyleSheet, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color } from "../GlobalStyles";

const Logo = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.logo}>
      <Image
        style={styles.logoChild}
        resizeMode="cover"
        source={require("../assets/ellipse-39.png")}
      />
      <Image
        style={styles.logoItem}
        resizeMode="cover"
        source={require("../assets/ellipse-38.png")}
      />
      <Pressable
        style={styles.unnamed1}
        onPress={() => navigation.navigate("Welcome")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/unnamed1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  logoChild: {
    top: 587,
    left: 0,
    width: 400,
    height: 400,
    position: "absolute",
  },
  logoItem: {
    top: 0,
    left: 286,
    width: 240,
    height: 240,
    position: "absolute",
  },
  icon: {
    borderRadius: Border.br_xs,
    height: "100%",
    width: "100%",
  },
  unnamed1: {
    left: 66,
    top: 270,
    width: 259,
    height: 255,
    position: "absolute",
  },
  logo: {
    backgroundColor: Color.white,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Logo;
