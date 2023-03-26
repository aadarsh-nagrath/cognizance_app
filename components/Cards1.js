import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Cards1 = ({ style }) => {
  return (
    <View style={[styles.cards, style]}>
      <Image
        style={styles.businessCreditCard}
        resizeMode="cover"
        source={require("../assets/business--credit-card1.png")}
      />
      <Text style={styles.cards1}>Cards</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  businessCreditCard: {
    width: 48,
    height: 48,
    overflow: "hidden",
  },
  cards1: {
    fontSize: FontSize.size_7xl,
    letterSpacing: 1,
    lineHeight: 56,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.steelblue,
    textAlign: "center",
    display: "none",
  },
  cards: {
    backgroundColor: Color.white,
    width: 84,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Cards1;
