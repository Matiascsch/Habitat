import React from "react";
import { Stack } from "expo-router";
import { StyleSheet, View, Text } from "react-native";
import { COLORS } from "@/constants/Themes";
import IncomesComp from "@/components/stats/IncomesComp";
import ToDoComp from "@/components/stats/ToDoComp";
import BasicIncomeComp from "@/components/stats/BasicIncomeComp";


export default function StatsLayout() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "stats" }} />

      <Text style={{width: "100%", color: 'white', textAlign: "left", fontSize: 24, textDecorationLine: 'underline'}}>Estadisticas</Text>

      <BasicIncomeComp />

      <IncomesComp />
      <IncomesComp />

      <Text style={{width: "100%", color: 'white', textAlign: "left",  textDecorationLine: 'underline', marginTop: 5}}>Ùltimas acciones</Text>
      <ToDoComp />
      <ToDoComp />
      <ToDoComp />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
    padding: 16
  }
});