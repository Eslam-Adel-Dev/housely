import { Tabs } from "expo-router";
// react native imports
import React from "react";
// active icons
import InactiveDiscovery from "@/assets/icons/tabBarIcons/inactive/Discovery.svg";
import InactiveDocument from "@/assets/icons/tabBarIcons/inactive/Document.svg";
import InactiveHeart from "@/assets/icons/tabBarIcons/inactive/Heart.svg";
import InactiveHome from "@/assets/icons/tabBarIcons/inactive/Home.svg";
import InactiveProfile from "@/assets/icons/tabBarIcons/inactive/Profile.svg";
// inactive icons
import Document from "@/assets/icons/tabBarIcons/active/Document.svg";
import Heart from "@/assets/icons/tabBarIcons/active/Heart.svg";
import Home from "@/assets/icons/tabBarIcons/active/Home.svg";
import Profile from "@/assets/icons/tabBarIcons/active/Profile.svg";
//components imports
import TabBarIcon from "@/components/tabBar/tabBarIcon";

//=========================================================

const AppLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#6941C6",
        tabBarInactiveTintColor: "#9DA4AE",
        tabBarStyle: {
          backgroundColor: "white",
          height: 70,
        },
        tabBarItemStyle: {
          height: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        },
        tabBarIconStyle: { marginBottom: 5 },
        tabBarLabelStyle: { fontSize: 11, fontWeight: "bold" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              ActiveIcon={Home}
              InActiveIcon={InactiveHome}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              ActiveIcon={InactiveDiscovery}
              InActiveIcon={InactiveDiscovery}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          title: "Favorite",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              ActiveIcon={Heart}
              InActiveIcon={InactiveHeart}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="booking"
        options={{
          title: "My Bookings",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              ActiveIcon={Document}
              InActiveIcon={InactiveDocument}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              ActiveIcon={Profile}
              InActiveIcon={InactiveProfile}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default AppLayout;
