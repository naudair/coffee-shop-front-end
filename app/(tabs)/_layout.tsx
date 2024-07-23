import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#0a7ea4",
        headerShown: false,
        tabBarStyle: {
          display:
            route.name === "index" ||
            route.name === "login" ||
            route.name === "signup" ||
            route.name === "step1"
              ? "none"
              : "flex",
        },
        tabBarButton: ["index", "login"].includes(route.name)
          ? () => {
              return null;
            }
          : undefined,
      })}
    >
      <Tabs.Screen
        name="index"
        options={{ tabBarStyle: { display: "none" } }}
      />
      <Tabs.Screen
        name="login"
        options={{ tabBarStyle: { display: "none" } }}
      />
      <Tabs.Screen
        name="signup"
        options={{ tabBarStyle: { display: "none" } }}
      />
      <Tabs.Screen
        name="step1"
        options={{ tabBarStyle: { display: "none" } }}
      />
    </Tabs>
  );
}
