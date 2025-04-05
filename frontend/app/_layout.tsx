import { Slot } from "expo-router";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";

import { COLORS } from "../constants/Themes";

import MenuBar from "../components/MenuBar";

export default function CustomLayout() {
  return (
    <>
      <StatusBar
        hidden={false}
        backgroundColor="#000"
      />

      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.content}>
          <Slot />
        </ScrollView>

      <MenuBar />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingBottom: 60,
  },
  content: {
    flex: 1,
    padding: 16,
  },
});
