import { Tabs } from "expo-router";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
export default function TabsLayout() {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor:'coral', headerShadowVisible: false}}>
      <Tabs.Screen
      name="home"
        options={{
          title: "Home",
          tabBarIcon({ color }) {
            return <FontAwesome name="home" size={24} color={color} />;
          },
        }}
      />
      <Tabs.Screen
      name="about"
        options={{
          title: "About",
          tabBarIcon({ color }) {
            return <MaterialIcons name="details" size={24} color={color} />;
          },
        }}
      />
    </Tabs>
  );
}
