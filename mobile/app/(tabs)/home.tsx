import ThemedText from '@/components/text/ThemedText';
import { AddNewCard } from '@/components/ui/cards/AddNewCard';
import { useThemeColor } from '@/hooks/useThemeColor';
import { ScrollView, StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  const theme = useThemeColor();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.background }}>
      <ThemedText type="title" style={{ color: "red" }}>Title 1</ThemedText>
      <View style={styles.container}>
        <ThemedText type="title" style={{ color: "red" }}>Title 1</ThemedText>
        <AddNewCard />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    color: "#fff",
    fontSize: 24,
    padding: 16,
  }
});
