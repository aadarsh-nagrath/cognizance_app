import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Cards = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.cards, style]}
      onPress={() =>
        navigation.navigate("BottomTabsRoot", { screen: "EVents" })
      }
    >
      <Image
        style={styles.businessCreditCard}
        resizeMode="cover"
        source={require("../assets/business--credit-card.png")}
      />
      <Text style={styles.cards1}>Cards</Text>
    </Pressable>
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
    backgroundColor: Color.gray_400,
    width: 84,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Cards;
