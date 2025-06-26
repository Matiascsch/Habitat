import ThemedText from "@/components/ui/text/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { View, StyleSheet } from "react-native";

import { Ionicons } from '@expo/vector-icons';

export const AddNewCard = () => {
  const theme = useThemeColor();

  return (
    <View style={styles.container}>
      <Ionicons name="add-circle-outline" size={32} color={theme.text} />
      <ThemedText type="caption" style={{ color: theme.text, textAlign: "center" }}>Add New Habitat</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    height: 140,
    width: 100,
    backgroundColor: "transparent",
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});