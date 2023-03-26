import * as React from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Game = () => {
  return (
    <View style={styles.game}>
      <Text style={[styles.games, styles.gamesFlexBox]}>Games</Text>
      <View style={styles.searchbar}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector5.png")}
        />
        <Text style={[styles.search, styles.gamesFlexBox]}>Search</Text>
      </View>
      <Image
        style={[styles.exploreCardIcon, styles.exploreCardLayout]}
        resizeMode="cover"
        source={require("../assets/explore-card.png")}
      />
      <Image
        style={[styles.exploreCardIcon1, styles.exploreCardLayout]}
        resizeMode="cover"
        source={require("../assets/explore-card1.png")}
      />
      <Text style={[styles.off, styles.offTypo]}>Quiz</Text>
      <Text style={[styles.wordle, styles.offTypo]}>Wordle</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  gamesFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  exploreCardLayout: {
    height: "17.89%",
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: Border.br_3xs,
    left: "4.87%",
    position: "absolute",
    overflow: "hidden",
  },
  offTypo: {
    color: Color.white,
    fontFamily: FontFamily.poppinsExtrabold,
    fontWeight: "800",
    textAlign: "left",
    position: "absolute",
  },
  topnavShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    overflow: "hidden",
    width: "100%",
  },
  cardsPosition: {
    top: "14.29%",
    position: "absolute",
  },
  accountLayout: {
    width: "6.41%",
    position: "absolute",
  },
  hamLayout: {
    height: 4,
    borderRadius: Border.br_12xs,
    left: 0,
    width: 32,
    position: "absolute",
    backgroundColor: Color.white,
  },
  games: {
    top: "16%",
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemibold,
    color: Color.black,
    left: "4.87%",
    textAlign: "left",
  },
  vectorIcon: {
    height: "44.44%",
    width: "5.68%",
    top: "28.89%",
    right: "4.83%",
    bottom: "26.67%",
    left: "89.49%",
    position: "absolute",
  },
  search: {
    top: "31.11%",
    left: "3.98%",
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.gray_100,
  },
  searchbar: {
    height: "5.33%",
    top: "23.58%",
    right: "5.38%",
    bottom: "71.09%",
    left: "4.36%",
    borderStyle: "solid",
    borderColor: "#8f8f8f",
    borderWidth: 2,
    borderRadius: Border.br_3xs,
    width: "90.26%",
    position: "absolute",
    overflow: "hidden",
  },
  exploreCardIcon: {
    width: "92.82%",
    top: "38.15%",
    right: "2.31%",
    bottom: "43.96%",
  },
  exploreCardIcon1: {
    top: "59.48%",
    right: "4.87%",
    bottom: "22.63%",
    width: "90.26%",
    height: "17.89%",
  },
  off: {
    width: "25.9%",
    top: "5.45%",
    left: "32.05%",
    fontSize: 34,
  },
  wordle: {
    width: "39.49%",
    top: "65.4%",
    left: "38.97%",
    fontSize: FontSize.size_11xl,
  },
  game: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Game;
