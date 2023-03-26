const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Logo from "./screens/Logo";
import Account1 from "./screens/Account1";
import Page6 from "./screens/Page6";
import Game from "./screens/Game";
import Navbar from "./screens/Navbar";
import SignUp from "./screens/SignUp";
import Welcome from "./screens/Welcome";
import Explore1 from "./screens/Explore1";
import Home from "./screens/Home";
import Explore from "./components/Explore";
import GroupIcon1 from "./components/Group1";
import Account from "./components/Account";
import ActiveIcon from "./components/Active";
import Favourites from "./components/Favourites";
import GroupIcon from "./components/Group2";
import Cards1 from "./components/Cards1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
function BottomTabsRoot({ navigation }) {
  const [bottomTabItemsNormal] = React.useState([
    <GroupIcon1 />,
    <ActiveIcon />,
    <GroupIcon />,
    <Cards1 />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <Explore />,
    <Account />,
    <Favourites />,
    <Cards1 />,
  ]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation }) => {
        const activeIndex = state.index;
        return (
          <View
            style={{
              width: "100%",
              backgroundColor: "#fff",
              shadowColor: "rgba(0, 0, 0, 0.25)",
              shadowOffset: {
                width: 0,
                height: -1,
              },
              shadowRadius: 4,
              elevation: 4,
              shadowOpacity: 1,
              height: 70,
              overflow: "hidden",
              flexDirection: "row",
            }}
          >
            {bottomTabItemsNormal.map((item, index) => {
              const isFocused = state.index === index;
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    navigation.navigate({
                      name: state.routes[index].name,
                      merge: true,
                    });
                  }}
                >
                  {activeIndex === index
                    ? bottomTabItemsActive[index] || item
                    : item}
                </Pressable>
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen name="Game" component={Game} />
      <Tab.Screen
        name="Account"
        component={Account1}
        options={(props) => ({
          headerShown: true,

          headerTitle: "fampay",
        })}
      />
      <Tab.Screen name="Explore" component={Explore1} />
      <Tab.Screen name="EVents" component={Home} />
    </Tab.Navigator>
  );
}

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded, error] = useFonts({
    Montserrat_medium: require("./assets/fonts/Montserrat_medium.ttf"),
    Montserrat_semibold: require("./assets/fonts/Montserrat_semibold.ttf"),
    Montserrat_bold: require("./assets/fonts/Montserrat_bold.ttf"),
    Montserrat_extrabold: require("./assets/fonts/Montserrat_extrabold.ttf"),
    Roboto_medium: require("./assets/fonts/Roboto_medium.ttf"),
    Roboto_semibold: require("./assets/fonts/Roboto_semibold.ttf"),
    Poppins_regular: require("./assets/fonts/Poppins_regular.ttf"),
    Poppins_medium: require("./assets/fonts/Poppins_medium.ttf"),
    Poppins_semibold: require("./assets/fonts/Poppins_semibold.ttf"),
    Poppins_bold: require("./assets/fonts/Poppins_bold.ttf"),
    Poppins_extrabold: require("./assets/fonts/Poppins_extrabold.ttf"),
    "Open Sans_regular": require("./assets/fonts/Open_Sans_regular.ttf"),
    "Open Sans_bold": require("./assets/fonts/Open_Sans_bold.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 2000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Logo"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
            <Stack.Screen
              name="Logo"
              component={Logo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Event2"
              component={Page6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Logo />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
