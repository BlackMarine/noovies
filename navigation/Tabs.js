import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Moives from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import { View, Text } from "react-native-web";

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Tv"
      screenOptions={{
        tabBarLabelPosition: "beside-icon",
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "purple",
      }}
    >
      <Tab.Screen name="Movies" component={Moives} />
      <Tab.Screen
        name="Tv"
        component={Tv}
        options={{
          tabBarBadge: 5,
          headerTitleStyle: { color: "tomato" },
          headerRight: () => {
            <View>
              <Text>Hellodwdwqd</Text>
            </View>
          },
        }}
      />
      <Tab.Screen name="Search!@!@" component={Search} />
    </Tab.Navigator>
  );
}

export default Tabs;
