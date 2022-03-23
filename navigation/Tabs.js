import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Moives from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";

const Tab = createBottomTabNavigator();

function Tabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Movies" component={Moives} />
        <Tab.Screen name="Tv" component={Tv} />
        <Tab.Screen name="Search!@!@" component={Search} />
      </Tab.Navigator>
    );
  }

  export default Tabs;