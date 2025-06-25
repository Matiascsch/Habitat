import ThemedText from "@/components/text/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { View, StyleSheet } from "react-native";

export const AddNewCard = () => {
  const theme = useThemeColor();

  return (
    <View style={styles.container}>
      <ThemedText type="caption" style={{ color: theme.text }}>
        Add New Card
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    height: 130,
    width: 90,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});