import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily } from "../GlobalStyles";

const Page6 = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.event2}
      locations={[0.55, 1]}
      colors={["#ff9900", "#1a1818"]}
    >
      <Image
        style={[styles.imageIcon, styles.angelinaPosition]}
        resizeMode="cover"
        source={require("../assets/image.png")}
      />
      <Text style={[styles.event, styles.eventFlexBox]}>{`
Event
`}</Text>
      <Image
        style={styles.event2Child}
        resizeMode="cover"
        source={require("../assets/group-23.png")}
      />
      <Image
        style={styles.ratingStarsIcon}
        resizeMode="cover"
        source={require("../assets/rating-stars.png")}
      />
      <Text style={[styles.itIsA, styles.itIsATypo, styles.eventFlexBox]}>
        It is a 48-hour-long competition testing your patience, resilience,
        aptitude, and your coding skills.
      </Text>
      <Image
        style={styles.castsIcon}
        resizeMode="cover"
        source={require("../assets/casts.png")}
      />
      <View style={[styles.castsTitle, styles.castsTitleFlexBox]}>
        <Text style={[styles.guests, styles.textLayout, styles.itIsATypo]}>
          Guests
        </Text>
      </View>
      <Image
        style={styles.event2Item}
        resizeMode="cover"
        source={require("../assets/ellipse-1434.png")}
      />
      <View style={styles.separator} />
      <TouchableOpacity
        style={[styles.event2Inner, styles.castsTitleFlexBox]}
        activeOpacity={0.2}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "EVents" })
        }
      >
        <View style={styles.wrapper}>
          <Text style={[styles.text, styles.textClr, styles.textLayout]}>
            􀰌
          </Text>
        </View>
      </TouchableOpacity>
      <View
        style={[
          styles.angelinaJolieWrapper,
          styles.angelinaLayout,
          styles.angelinaLayout1,
        ]}
      >
        <View
          style={[
            styles.angelinaLayout,
            styles.angelinaLayout1,
            styles.angelinaPosition,
          ]}
        >
          <Image
            style={styles.subtractIcon}
            resizeMode="cover"
            source={require("../assets/subtract.png")}
          />
          <Image
            style={[
              styles.angelinaJolieChild,
              styles.angelinaLayout,
              styles.angelinaPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/group-18.png")}
          />
          <Text style={[styles.mohammadIshanAnwar, styles.textClr]}>
            Mohammad Ishan Anwar
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  angelinaPosition: {
    left: 0,
    top: 0,
  },
  eventFlexBox: {
    justifyContent: "center",
    textAlign: "center",
    position: "absolute",
  },
  itIsATypo: {
    color: Color.gray_300,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  castsTitleFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  textLayout: {
    height: 25,
    lineHeight: 25,
    fontSize: 21,
    justifyContent: "center",
    textAlign: "center",
  },
  textClr: {
    color: Color.white,
    alignItems: "center",
    display: "flex",
    letterSpacing: 0,
  },
  angelinaLayout: {
    height: 63,
    position: "absolute",
  },
  angelinaLayout1: {
    width: 171,
    height: 63,
  },
  imageIcon: {
    width: 409,
    height: 442,
    position: "absolute",
  },
  event: {
    top: 401,
    left: 79,
    fontSize: 25,
    color: "rgba(255, 255, 255, 0.85)",
    width: 258,
    height: 41,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    letterSpacing: 0,
    justifyContent: "center",
    textAlign: "center",
  },
  event2Child: {
    top: 462,
    left: 29,
    width: 351,
    height: 50,
    position: "absolute",
  },
  ratingStarsIcon: {
    top: 497,
    left: 158,
    width: 56,
    height: 15,
    position: "absolute",
  },
  itIsA: {
    top: 515,
    left: 43,
    fontSize: 15,
    width: 327,
    height: 102,
    justifyContent: "center",
    textAlign: "center",
    color: Color.gray_300,
  },
  castsIcon: {
    top: 690,
    left: 20,
    width: 362,
    height: 137,
    position: "absolute",
  },
  guests: {
    width: 83,
  },
  castsTitle: {
    top: 645,
    left: 42,
    borderRadius: 10,
    width: 73,
    height: 31,
    padding: 10,
  },
  event2Item: {
    top: 308,
    left: 283,
    width: 126,
    height: 145,
    borderRadius: 52,
    position: "absolute",
  },
  separator: {
    top: 630,
    left: 55,
    backgroundColor: "rgba(196, 196, 196, 0.15)",
    width: 301,
    height: 2,
    position: "absolute",
  },
  text: {
    fontFamily: FontFamily.openSans,
    width: 25,
  },
  wrapper: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 3.1,
    opacity: 0.8,
    borderRadius: 52,
    padding: 10,
  },
  event2Inner: {
    top: 60,
    left: 19,
  },
  subtractIcon: {
    width: 121,
    height: 52,
  },
  angelinaJolieChild: {
    width: 63,
  },
  mohammadIshanAnwar: {
    top: 17,
    left: 78,
    fontSize: 14,
    fontFamily: FontFamily.openSansRegular,
    textAlign: "left",
    width: 71,
    height: 38,
    position: "absolute",
  },
  angelinaJolieWrapper: {
    top: 689,
    left: 21,
  },
  event2: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 20.970874786376953,
      height: 20.970874786376953,
    },
    shadowRadius: 41.94,
    elevation: 41.94,
    shadowOpacity: 1,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
});

export default Page6;
