import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Account = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.account, style]}
      onPress={() => navigation.navigate("Account")}
    >
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/account.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
  },
  account: {
    width: 25,
    height: 25,
  },
});

export default Account;
