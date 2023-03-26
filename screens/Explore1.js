import * as React from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Explore1 = () => {
  return (
    <View style={styles.explore}>
      <Text style={styles.explore1}>Explore</Text>
      <View style={styles.searchbar}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector5.png")}
        />
        <Text style={[styles.search, styles.allTypo]}>Search</Text>
      </View>
      <Pressable style={[styles.allWrapper, styles.topnavBg]}>
        <Text
          style={[
            styles.all,
            styles.allPosition,
            styles.allTypo,
            styles.allTypo1,
          ]}
        >
          All
        </Text>
      </Pressable>
      <Pressable style={[styles.offersWrapper, styles.wrapperBorder]}>
        <Text style={[styles.offers, styles.offersTypo]}>offers</Text>
      </Pressable>
      <Pressable style={[styles.tokensWrapper, styles.wrapperBorder]}>
        <Text
          style={[
            styles.tokens,
            styles.allPosition,
            styles.allTypo,
            styles.allTypo1,
          ]}
        >
          tokens
        </Text>
      </Pressable>
      <Pressable style={[styles.couponsWrapper, styles.wrapperBorder]}>
        <Text style={[styles.coupons, styles.offersTypo]}>coupons</Text>
      </Pressable>
      <Image
        style={[styles.exploreCardIcon, styles.exploreCardLayout]}
        resizeMode="cover"
        source={require("../assets/explore-card2.png")}
      />
      <Image
        style={[styles.exploreCardIcon1, styles.exploreCardLayout]}
        resizeMode="cover"
        source={require("../assets/explore-card2.png")}
      />
      <Image
        style={[styles.exploreCardIcon2, styles.exploreCardLayout]}
        resizeMode="cover"
        source={require("../assets/explore-card2.png")}
      />
      <Image
        style={[styles.exploreCardIcon3, styles.exploreCardLayout]}
        resizeMode="cover"
        source={require("../assets/explore-card2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  allTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  topnavBg: {
    backgroundColor: Color.darkorange,
    position: "absolute",
  },
  allPosition: {
    top: 10,
    position: "absolute",
  },
  allTypo1: {
    color: Color.black,
    fontFamily: FontFamily.poppinsRegular,
    top: 10,
    fontSize: FontSize.size_sm,
  },
  wrapperBorder: {
    borderColor: "#ff9501",
    borderRadius: Border.br_81xl,
    bottom: "66.47%",
    top: "28.79%",
    height: "4.74%",
    borderWidth: 2,
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
  },
  offersTypo: {
    top: 9,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  exploreCardLayout: {
    height: "12.44%",
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: Border.br_3xs,
    right: "4.87%",
    width: "90.26%",
    left: "4.87%",
    position: "absolute",
    overflow: "hidden",
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
  accountLayout: {
    width: "6.41%",
    position: "absolute",
  },
  cardsPosition: {
    top: "12.86%",
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
  explore1: {
    top: "16%",
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemibold,
    textAlign: "left",
    left: "4.87%",
    color: Color.black,
    position: "absolute",
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
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.gray_100,
    position: "absolute",
  },
  searchbar: {
    height: "5.33%",
    top: "20.97%",
    bottom: "73.7%",
    borderColor: "#8f8f8f",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    right: "4.87%",
    width: "90.26%",
    left: "4.87%",
    position: "absolute",
    overflow: "hidden",
  },
  all: {
    left: 27,
    fontFamily: FontFamily.poppinsRegular,
  },
  allWrapper: {
    right: "77.18%",
    borderRadius: Border.br_81xl,
    bottom: "66.47%",
    top: "28.79%",
    height: "4.74%",
    backgroundColor: Color.darkorange,
    width: "17.95%",
    left: "4.87%",
    overflow: "hidden",
  },
  offers: {
    left: 15,
  },
  offersWrapper: {
    right: "57.18%",
    left: "24.87%",
    width: "17.95%",
    borderColor: "#ff9501",
  },
  tokens: {
    left: 14,
    fontFamily: FontFamily.poppinsRegular,
  },
  tokensWrapper: {
    width: "20%",
    right: "35.13%",
    left: "44.87%",
  },
  coupons: {
    left: 20,
  },
  couponsWrapper: {
    width: "26.15%",
    right: "6.92%",
    left: "66.92%",
  },
  exploreCardIcon: {
    top: "36.14%",
    bottom: "51.42%",
  },
  exploreCardIcon1: {
    top: "50.12%",
    bottom: "37.44%",
  },
  exploreCardIcon2: {
    top: "64.1%",
    bottom: "23.46%",
  },
  exploreCardIcon3: {
    top: "78.08%",
    bottom: "9.48%",
  },
  explore: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Explore1;
