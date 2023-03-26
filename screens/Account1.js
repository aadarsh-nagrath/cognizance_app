import * as React from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const Account1 = () => {
  return (
    <View style={styles.account}>
      <Text style={[styles.account1, styles.account1Typo]}>Account</Text>
      <ImageBackground
        style={styles.picIcon}
        resizeMode="cover"
        source={require("../assets/pic.png")}
      />
      <Text style={[styles.annabelle, styles.account1Typo]}>{`    Annabelle
 `}</Text>
      <Image
        style={styles.dotsIcon}
        resizeMode="cover"
        source={require("../assets/dots.png")}
      />
      <Image
        style={styles.creditCard1}
        resizeMode="cover"
        source={require("../assets/credit-card-1.png")}
      />
      <Image
        style={styles.accountChild}
        resizeMode="cover"
        source={require("../assets/ellipse-1882.png")}
      />
      <Image
        style={styles.mdidataMatrixScanIcon}
        resizeMode="cover"
        source={require("../assets/mdidatamatrixscan.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  account1Typo: {
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  topnavShadowBox: {
    width: 390,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    overflow: "hidden",
  },
  hamLayout: {
    height: 4,
    borderRadius: Border.br_12xs,
    width: 32,
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  exploreLayout: {
    width: "6.41%",
    position: "absolute",
  },
  explorePosition: {
    top: "31.43%",
    width: "6.41%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  cardsPosition: {
    bottom: "12.86%",
    position: "absolute",
  },
  account1: {
    top: 135,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemibold,
    left: 19,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_5xl,
  },
  picIcon: {
    top: 198,
    left: 131,
    width: 135,
    height: 135,
    position: "absolute",
  },
  annabelle: {
    top: 350,
    left: 121,
    lineHeight: 28,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    width: 157,
    height: 29,
  },
  dotsIcon: {
    top: 185,
    left: 28,
    width: 342,
    height: 172,
    position: "absolute",
  },
  creditCard1: {
    top: 413,
    left: 18,
    borderRadius: 20,
    width: 366,
    height: 238,
    position: "absolute",
    overflow: "hidden",
  },
  accountChild: {
    top: 646,
    left: 140,
    width: 118,
    height: 116,
    position: "absolute",
  },
  mdidataMatrixScanIcon: {
    top: 673,
    left: 165,
    width: 66,
    height: 61,
    position: "absolute",
    overflow: "hidden",
  },
  account: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Account1;
