import * as React from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  Pressable,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.events}>
      <ScrollView
        style={styles.foodcardParent}
        horizontal
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <Image
          style={[styles.foodcardIcon, styles.foodcardLayout]}
          resizeMode="cover"
          source={require("../assets/foodcard.png")}
        />
        <Image
          style={[styles.foodcardIcon, styles.ml11, styles.foodcardLayout]}
          resizeMode="cover"
          source={require("../assets/foodcard1.png")}
        />
        <Image
          style={[styles.foodcardIcon, styles.ml11, styles.foodcardLayout]}
          resizeMode="cover"
          source={require("../assets/foodcard2.png")}
        />
      </ScrollView>
      <ScrollView
        style={styles.foodcardGroup}
        horizontal
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollView1Content}
      >
        <Image
          style={[styles.foodcardIcon, styles.foodcardLayout]}
          resizeMode="cover"
          source={require("../assets/foodcard3.png")}
        />
        <Image
          style={[styles.foodcardIcon, styles.ml11, styles.foodcardLayout]}
          resizeMode="cover"
          source={require("../assets/foodcard1.png")}
        />
        <Pressable
          style={[styles.foodcard, styles.ml11, styles.foodcardLayout]}
        >
          <ImageBackground
            style={styles.intersectIcon}
            resizeMode="cover"
            source={require("../assets/intersect.png")}
          >
            <View style={[styles.intersectChild, styles.foodcardItemLayout]} />
            <View style={styles.image1} />
          </ImageBackground>
          <View style={[styles.intersectChild, styles.foodcardItemLayout]} />
          <Text style={styles.hackathon}>hackathon</Text>
          <TouchableOpacity
            style={[styles.foodcardItem, styles.foodcardItemLayout]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("Event2")}
          />
          <Text style={[styles.view, styles.viewClr]}>{`view
`}</Text>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector6.png")}
          />
        </Pressable>
      </ScrollView>
      <Text style={styles.technical}>{`technical `}</Text>
      <Text
        style={[styles.nonTechnical, styles.culturalTypo]}
      >{`non technical `}</Text>
      <Text style={[styles.cultural, styles.culturalTypo]}>cultural</Text>
      <Text
        style={[styles.upcomingEvents, styles.viewClr]}
      >{`Upcoming Events `}</Text>
      <ScrollView
        style={styles.foodcardContainer}
        horizontal
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollView2Content}
      >
        <Image
          style={[styles.foodcardIcon, styles.foodcardLayout]}
          resizeMode="cover"
          source={require("../assets/foodcard5.png")}
        />
        <Image
          style={[styles.foodcardIcon, styles.ml11, styles.foodcardLayout]}
          resizeMode="cover"
          source={require("../assets/foodcard6.png")}
        />
        <Image
          style={[styles.foodcardIcon, styles.ml11, styles.foodcardLayout]}
          resizeMode="cover"
          source={require("../assets/foodcard2.png")}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ml11: {
    marginLeft: 11,
  },
  frameScrollViewContent: {
    flexDirection: "row",
  },
  frameScrollView1Content: {
    flexDirection: "row",
  },
  frameScrollView2Content: {
    flexDirection: "row",
  },
  foodcardLayout: {
    height: 180,
    width: 130,
    borderRadius: Border.br_3xs,
    overflow: "hidden",
  },
  foodcardItemLayout: {
    borderRadius: Border.br_6xs,
    left: 10,
    width: 110,
    position: "absolute",
  },
  viewClr: {
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  culturalTypo: {
    left: 20,
    fontFamily: FontFamily.montserratMedium,
    color: Color.black,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  exploreLayout: {
    width: "6.41%",
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
  foodcardIcon: {
    overflow: "hidden",
  },
  foodcardParent: {
    top: 689,
    height: 155,
    maxHeight: 155,
    left: 19,
    position: "absolute",
    width: "100%",
  },
  intersectChild: {
    top: 10,
    height: 110,
  },
  image1: {
    top: 7,
    left: 7,
    width: 144,
    height: 123,
    position: "absolute",
  },
  intersectIcon: {
    height: 110,
    width: 110,
  },
  hackathon: {
    top: 118,
    left: 26,
    fontWeight: "800",
    fontFamily: FontFamily.montserratExtrabold,
    color: Color.white,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  foodcardItem: {
    backgroundColor: "#fafafa",
    height: 40,
    top: 135,
  },
  view: {
    top: 146,
    left: 51,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.black,
    fontSize: FontSize.size_sm,
  },
  vectorIcon: {
    height: "8.1%",
    width: "11.54%",
    top: "10.59%",
    right: "13.08%",
    bottom: "81.32%",
    left: "75.38%",
    position: "absolute",
  },
  foodcard: {
    backgroundColor: "#2d2a32",
    overflow: "hidden",
  },
  foodcardGroup: {
    top: 458,
    height: 175,
    maxHeight: 175,
    left: 19,
    position: "absolute",
    width: "100%",
  },
  technical: {
    top: 197,
    fontFamily: FontFamily.montserratMedium,
    color: Color.black,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_sm,
    left: 19,
    position: "absolute",
  },
  nonTechnical: {
    top: 428,
  },
  cultural: {
    top: 659,
  },
  upcomingEvents: {
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemibold,
    top: 135,
    left: 19,
  },
  foodcardContainer: {
    top: 227,
    height: 167,
    maxHeight: 167,
    left: 19,
    position: "absolute",
    width: "100%",
  },
  events: {
    flex: 1,
    height: 844,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Home;
