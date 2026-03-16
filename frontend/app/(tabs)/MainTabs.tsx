import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import TrainScreen from "../screens/TrainScreen";
import FocusScreen from "../screens/FocusScreen";
import ProgressScreen from "../screens/ProgressScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
  headerShown: false,
  tabBarIcon: ({ color, size }) => {
    let iconName: any;

    if (route.name === "Home") iconName = "home";
    else if (route.name === "Train") iconName = "barbell";
    else if (route.name === "Focus") iconName = "timer";
    else if (route.name === "Progress") iconName = "stats-chart";
    else if (route.name === "Profile") iconName = "person";

    return <Ionicons name={iconName} size={size} color={color} />;
  },
})}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Train" component={TrainScreen} />
      <Tab.Screen name="Focus" component={FocusScreen} />
      <Tab.Screen name="Progress" component={ProgressScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
