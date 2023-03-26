import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.welcome}>
      <View style={styles.welcomeChild} />
      <Text style={styles.welcome1}>Welcome</Text>
      <TouchableOpacity
        style={[styles.signIn, styles.signLayout]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("SignUp")}
      >
        <View style={[styles.signInChild, styles.signChildLayout]} />
        <Text style={[styles.login, styles.loginTypo]}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.signUp, styles.signLayout]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("SignUp")}
      >
        <View style={[styles.signUpChild, styles.signChildLayout]} />
        <Text style={[styles.signUp1, styles.loginTypo]}>Sign up</Text>
      </TouchableOpacity>
      <ImageBackground
        style={styles.fampay1Icon}
        resizeMode="cover"
        source={require("../assets/fampay1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  signLayout: {
    height: 73,
    width: 146,
    top: 676,
    position: "absolute",
  },
  signChildLayout: {
    borderRadius: Border.br_11xl,
    top: 0,
    height: 73,
    width: 146,
    left: 0,
    position: "absolute",
  },
  loginTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  welcomeChild: {
    top: 403,
    borderTopLeftRadius: Border.br_26xl,
    borderTopRightRadius: Border.br_26xl,
    backgroundColor: Color.darkorange,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: -3,
      height: 16,
    },
    shadowRadius: 38,
    elevation: 38,
    shadowOpacity: 1,
    width: 390,
    height: 441,
    left: 0,
    position: "absolute",
  },
  welcome1: {
    marginTop: 96,
    marginLeft: -158,
    fontSize: FontSize.size_11xl,
    color: Color.gray_200,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  signInChild: {
    backgroundColor: Color.gray_200,
  },
  login: {
    marginTop: -14.5,
    marginLeft: -27,
    color: Color.white,
  },
  signIn: {
    left: 37,
  },
  signUpChild: {
    backgroundColor: Color.white,
  },
  signUp1: {
    marginTop: -15.5,
    marginLeft: -39,
    color: Color.black,
  },
  signUp: {
    left: 206,
  },
  fampay1Icon: {
    top: 163,
    left: 29,
    width: 332,
    height: 98,
    position: "absolute",
  },
  welcome: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Welcome;
