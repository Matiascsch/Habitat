import { Slot } from "expo-router";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";

import { COLORS } from "../constants/Themes";

import MenuBar from "../components/MenuBar";

export default function CustomLayout() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar 
          hidden={false}
          backgroundColor={COLORS.background}
        />
        <StatusBar></StatusBar>
        {/* Contenido dinámico */}
        <ScrollView style={styles.content}>
          <Slot />
        </ScrollView>

      </SafeAreaView>
      {/* Footer global */}
      <MenuBar />
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
