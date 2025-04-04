import { Slot } from "expo-router";
import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

import { COLORS } from "../constants/Themes";

import MenuBar from "../components/menu/MenuBar";

export default function CustomLayout() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Contenido dinámico */}
      <View style={styles.content}>
        <Slot />
      </View>

      {/* Footer global */}
      <View>
        <MenuBar />
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background
  },
  content: {
    flex: 1,
    padding: 16,
  },
});
