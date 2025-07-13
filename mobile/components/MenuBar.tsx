import { useThemeColor } from "@/hooks/useThemeColor";
import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import ThemedText from "./ui/text/ThemedText";

import { Ionicons } from '@expo/vector-icons';
import { RelativePathString, router } from "expo-router";

export const MenuBar = () => {
  const theme = useThemeColor();
  const [activeItem, setActiveItem] = useState<string | null>("Home");
  const menuItems = [
    { route: "/home", icon: "home", label: "Home" },
    { route: "/stats", icon: "stats-chart", label: "Stats" },
    { route: "/profile", icon: "person", label: "Profile" },
  ];

  const onPressMenuItem = (route: RelativePathString, label: string) => {
    router.push(route);
    setActiveItem(label);
  }

  return (
    <View style={styles.container}>
      {
        menuItems.map((item) => (
          <Pressable key={item.route} style={styles.item} onPress={() => onPressMenuItem(item.route as RelativePathString, item.label)}>
            <Ionicons name={item.icon} size={24} color={(activeItem === item.label) ?  "white" : theme.primary} />
            <ThemedText type="caption">{item.label}</ThemedText>
          </Pressable>
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: 'black',
    boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.6)',
  },
  item: {
    alignItems: 'center',
  }
})