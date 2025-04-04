import React from "react";
import { Stack } from "expo-router";
import { StyleSheet, View, Text } from "react-native";
import { COLORS } from "@/constants/Themes";


export default function StatsLayout() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "stats" }} />
      <Text style={styles.text}>Stats</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    padding: 20,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: COLORS.primary,
    color: "white",
  },
});