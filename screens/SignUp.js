import * as React from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
  SafeAreaView,
  View,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.signUp, styles.iconLayout]}>
      <Text style={styles.signUp1}>Sign up</Text>
      <Text style={[styles.login, styles.loginTypo]}>Login</Text>
      <TouchableOpacity
        style={styles.vector}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("Welcome")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
      </TouchableOpacity>
      <SafeAreaView style={[styles.signUpChild, styles.signShadowBox]} />
      <Pressable
        style={[styles.signIn, styles.usernameLayout, styles.signShadowBox]}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "Account" })
        }
      >
        <View style={styles.groupChildPosition}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Text style={[styles.signUp2, styles.loginTypo]}>Sign Up</Text>
        </View>
      </Pressable>
      <TextInput
        style={[styles.username, styles.usernameLayout]}
        placeholder="Full Name"
        keyboardType="default"
        placeholderTextColor="#0d0101"
      />
      <TextInput
        style={[styles.username1, styles.usernameLayout]}
        placeholder="Contact"
        keyboardType="default"
        placeholderTextColor="#b0b0b0"
      />
      <TextInput
        style={[styles.password, styles.usernameLayout]}
        placeholder="Email"
        keyboardType="default"
        placeholderTextColor="#b0b0b0"
      />
      <TextInput
        style={[styles.password1, styles.usernameLayout]}
        placeholder="Password"
        keyboardType="default"
        placeholderTextColor="#b0b0b0"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  loginTypo: {
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  signShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: -3,
      height: 16,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  usernameLayout: {
    height: 66,
    width: 301,
    left: 44,
    position: "absolute",
  },
  groupChildPosition: {
    top: 0,
    height: 66,
    width: 301,
    left: 0,
    position: "absolute",
  },
  signUp1: {
    top: 215,
    left: 39,
    fontSize: 32,
    letterSpacing: -1.4,
    lineHeight: 40,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    textAlign: "left",
    color: Color.gray_200,
    position: "absolute",
  },
  login: {
    top: 29,
    left: 318,
    fontSize: 15,
    color: Color.gray_200,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  vector: {
    left: "5.13%",
    top: "3.55%",
    right: "90%",
    bottom: "94.55%",
    width: "4.87%",
    height: "1.9%",
    position: "absolute",
  },
  signUpChild: {
    top: 265,
    borderTopLeftRadius: Border.br_26xl,
    borderTopRightRadius: Border.br_26xl,
    backgroundColor: Color.white,
    shadowRadius: 38,
    elevation: 38,
    width: 390,
    height: 579,
    left: 0,
    shadowOffset: {
      width: -3,
      height: 16,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  groupChild: {
    borderRadius: 47,
    backgroundColor: Color.gray_200,
  },
  signUp2: {
    top: 21,
    left: 112,
    fontSize: FontSize.size_xl,
    letterSpacing: -0.9,
    color: Color.white,
  },
  signIn: {
    top: 693,
    shadowRadius: 4,
    elevation: 4,
  },
  username: {
    top: 323,
  },
  username1: {
    top: 489,
  },
  password: {
    top: 406,
  },
  password1: {
    top: 572,
  },
  signUp: {
    backgroundColor: Color.darkorange,
    flex: 1,
    height: 844,
  },
});

export default SignUp;
