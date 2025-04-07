import { Slot } from "expo-router";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, ScrollView } from "react-native";
import { COLORS } from "../constants/Themes";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import MenuBar from "@/components/navigation/MenuBar";
import HeaderComp from "@/components/HeaderComp";

export default function CustomLayout() {
  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar hidden={false} backgroundColor="#000" />

      <HeaderComp />

      <ScrollView style={styles.content}>
        <Slot />
      </ScrollView>

      <MenuBar />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    padding: 16,
  },
});
