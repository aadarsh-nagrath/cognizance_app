import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Navbar = ({ state, navigation }) => {
  const [drawerItemsNormal] = useState([]);
  const [drawerItemsActive] = useState([]);
  const stateIndex = !state ? 0 : state.index - 1;
  return (
    <View style={[styles.navbar, styles.navbarLayout]}>
      <View style={[styles.backk, styles.backkPosition]}>
        <View style={[styles.topnav, styles.topnavBg, styles.navbarLayout]}>
          <View style={styles.ham}>
            <View style={[styles.hamChild, styles.hamLayout]} />
            <View style={[styles.hamItem, styles.hamLayout]} />
            <View style={[styles.hamInner, styles.hamLayout]} />
          </View>
          <Text style={[styles.ajayCaf, styles.textFlexBox]}>Home</Text>
          <Image
            style={[
              styles.vectorIcon,
              styles.iconLayout1,
              styles.vectorIconPosition2,
            ]}
            resizeMode="cover"
            source={require("../assets/vector1.png")}
          />
          <Image
            style={[
              styles.vectorIcon1,
              styles.iconLayout1,
              styles.vectorIconPosition2,
            ]}
            resizeMode="cover"
            source={require("../assets/vector2.png")}
          />
          <View style={styles.ellipseParent}>
            <Image
              style={[styles.groupChild, styles.accountLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-37.png")}
            />
            <Text style={[styles.text, styles.textFlexBox]}>2</Text>
          </View>
        </View>
        <View style={[styles.backk, styles.backkPosition]}>
          <View style={[styles.groupItem, styles.backkPosition]} />
          <Text style={[styles.welcomeBackAdmin, styles.offersTypo]}>
            Welcome back Admin!
          </Text>
          <View style={[styles.groupInner, styles.topnavBg]} />
          <Text style={styles.pay105}>Pay ₹105</Text>
          <View style={[styles.rectangleView, styles.backkPosition]} />
        </View>
      </View>
      <View style={styles.navbarChild} />
      <TouchableOpacity
        style={[styles.products, styles.accountLayout]}
        activeOpacity={0.2}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "Explore" })
        }
      >
        <Text style={[styles.offers, styles.offersTypo, styles.offersClr]}>
          offers
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.orders}
        activeOpacity={0.2}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "Game" })
        }
      >
        <Image
          style={[
            styles.vectorIcon2,
            styles.vectorIconPosition,
            styles.vectorIconPosition1,
          ]}
          resizeMode="cover"
          source={require("../assets/vector3.png")}
        />
        <Text style={[styles.game, styles.gameTypo]}>Game</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.account, styles.accountLayout]}
        activeOpacity={0.2}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "Account" })
        }
      >
        <Text style={[styles.account1, styles.offersTypo, styles.offersClr]}>
          Account
        </Text>
        <Image
          style={[styles.vectorIcon3, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
      </TouchableOpacity>
      <View style={[styles.home, styles.homeLayout]}>
        <View style={[styles.homeChild, styles.homeLayout]} />
        <TouchableOpacity
          style={styles.vectorParent}
          activeOpacity={0.2}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "EVents" })
          }
        >
          <Image
            style={[
              styles.vectorIcon4,
              styles.vectorIconPosition,
              styles.vectorIconPosition1,
            ]}
            resizeMode="cover"
            source={require("../assets/vector4.png")}
          />
          <Text style={[styles.home1, styles.gameTypo]}>Home</Text>
        </TouchableOpacity>
      </View>
      <ImageBackground
        style={styles.unnamed2Icon}
        resizeMode="cover"
        source={require("../assets/unnamed2.png")}
      />
      <TouchableOpacity
        style={styles.favourites}
        activeOpacity={0.2}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "Explore" })
        }
      >
        <Image
          style={[styles.iconLayout, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/favourites1.png")}
        />
      </TouchableOpacity>
      <Pressable
        style={styles.ictwotoneClose}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/ictwotoneclose.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarLayout: {
    overflow: "hidden",
    width: 390,
  },
  backkPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  topnavBg: {
    backgroundColor: Color.darkorange,
    position: "absolute",
  },
  hamLayout: {
    height: 4,
    borderRadius: Border.br_12xs,
    width: 32,
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vectorIconPosition2: {
    bottom: "34.29%",
    top: "35.71%",
    height: "30%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  accountLayout: {
    height: 22,
    position: "absolute",
  },
  offersTypo: {
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    position: "absolute",
  },
  offersClr: {
    color: Color.white,
    fontFamily: FontFamily.montserratSemibold,
    top: 0,
  },
  vectorIconPosition: {
    left: "0%",
    bottom: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition1: {
    top: "0%",
    height: "100%",
    left: "0%",
    bottom: "0%",
  },
  gameTypo: {
    top: 2,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  homeLayout: {
    height: 59,
    width: 283,
    position: "absolute",
  },
  hamChild: {
    top: 8,
  },
  hamItem: {
    top: 0,
  },
  hamInner: {
    top: 16,
  },
  ham: {
    top: 26,
    left: 19,
    height: 20,
    width: 32,
    position: "absolute",
  },
  ajayCaf: {
    left: 65,
    fontSize: FontSize.size_5xl,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    top: 18,
  },
  vectorIcon: {
    width: "5.38%",
    right: "5.13%",
    left: "89.49%",
  },
  vectorIcon1: {
    width: "4.62%",
    right: "17.44%",
    left: "77.95%",
  },
  groupChild: {
    top: -2,
    width: 23,
    left: -4,
  },
  text: {
    marginTop: -6,
    marginLeft: -2.5,
    top: "50%",
    left: "50%",
    fontSize: 8,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
  },
  ellipseParent: {
    left: 313,
    width: 15,
    height: 14,
    top: 18,
    position: "absolute",
  },
  topnav: {
    top: 30,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 70,
    left: 0,
  },
  groupItem: {
    top: 98,
    backgroundColor: "#ffe8c8",
    height: 61,
    left: 0,
    position: "absolute",
  },
  welcomeBackAdmin: {
    top: 119,
    color: Color.black,
    left: 24,
  },
  groupInner: {
    top: 684,
    left: 117,
    borderRadius: 5,
    width: 156,
    height: 37,
  },
  pay105: {
    top: 691,
    left: 152,
    letterSpacing: 1.2,
    lineHeight: 26,
    fontFamily: FontFamily.robotoSemibold,
    width: 85,
    height: 24,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  rectangleView: {
    backgroundColor: "#d9d9d9",
    opacity: 0.6,
    left: 0,
    top: 0,
    position: "absolute",
    height: 844,
  },
  backk: {
    left: 0,
    top: 0,
    position: "absolute",
    height: 844,
  },
  navbarChild: {
    width: 283,
    left: -4,
    backgroundColor: Color.darkorange,
    top: 0,
    position: "absolute",
    height: 844,
  },
  offers: {
    left: 0,
  },
  products: {
    top: 269,
    left: 61,
    width: 53,
  },
  vectorIcon2: {
    width: "26.09%",
    right: "73.91%",
  },
  game: {
    left: 36,
  },
  orders: {
    height: "2.84%",
    width: "23.59%",
    top: "39.45%",
    right: "70.77%",
    bottom: "57.7%",
    left: "5.64%",
    position: "absolute",
  },
  account1: {
    left: 34,
  },
  vectorIcon3: {
    height: "95.45%",
    width: "18.75%",
    top: "4.55%",
    right: "81.25%",
  },
  account: {
    top: 398,
    width: 112,
    left: 24,
  },
  homeChild: {
    backgroundColor: "#cf7900",
    opacity: 0.8,
    left: 0,
    top: 0,
  },
  vectorIcon4: {
    width: "28.57%",
    right: "71.43%",
  },
  home1: {
    left: 41,
  },
  vectorParent: {
    height: "40.68%",
    width: "34.63%",
    top: "23.73%",
    right: "56.89%",
    bottom: "35.59%",
    left: "8.48%",
    position: "absolute",
  },
  home: {
    top: 187,
    left: -4,
  },
  unnamed2Icon: {
    top: 52,
    left: 77,
    borderRadius: Border.br_xs,
    width: 104,
    height: 96,
    position: "absolute",
  },
  iconLayout: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  favourites: {
    left: "5.9%",
    top: "31.87%",
    right: "87.69%",
    bottom: "65.41%",
    width: "6.41%",
    height: "2.72%",
    position: "absolute",
  },
  ictwotoneClose: {
    left: 14,
    top: 10,
    width: 25,
    height: 25,
    position: "absolute",
  },
  navbar: {
    height: 844,
    backgroundColor: Color.white,
    overflow: "hidden",
  },
});

export default Navbar;
