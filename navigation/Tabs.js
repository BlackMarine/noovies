import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Moives from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";
import { useColorScheme } from 'react-native';
import { BLACK_COLOR, DARK_GREY, LIGHT_GREY, YELLOW_COLOR } from "../colors";
const Tab = createBottomTabNavigator();

function Tabs() {
  const isDark = useColorScheme() === "dark";
  return (
    <Tab.Navigator
      //첫탭위치 init
      initialRouteName="Tv"
      screenOptions={{
        //i pad 에선 비사이드 많이씀
        // tabBarLabelPosition: "beside-icon",
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: isDark ? "black" : YELLOW_COLOR,
        },
        tabBarLabelStyle: {
          marginTop: -8,
          fontSize: 14,
          fontWeight: "600",
        },
      }}
    >
      <Tab.Screen 
        name="Movies" 
        component={Moives}
        options={{
          headerRight: () => (
            <View>
              <Text>HelloMovie</Text>
            </View>
          ),
          tabBarIcon: ({focused, color, size}) => {
            return <Ionicons name={focused ? "film" : "film-outline"} color={color} size={size}/>
          },
        }}
      />
      <Tab.Screen
        name="TV"
        component={Tv}
        options={{
          //5개 알림이 있어요~ Badge
          tabBarBadge: 5,
          //헤더꾸미기
          headerTitleStyle: { color: "tomato" },
          headerRight: () => (
            <View>
              <Text>HelloTV</Text>
            </View>
          ),
          tabBarIcon: ({focused, color, size}) => {
            return <Ionicons name="tv-outline" color={color} size={size}/>
          },
        }}
      />
      <Tab.Screen 
        name="Search!@!@" 
        component={Search}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return <Ionicons name={focused ? "search" : "search-outline"} color={color} size={size}/>
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
