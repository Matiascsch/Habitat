import ThemedText from '@/components/ui/text/ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useRouter } from 'expo-router';
import { Button, ScrollView, StyleSheet } from 'react-native';

export default function StatsScreen() {
  const theme = useThemeColor();
  const router = useRouter();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.background }}>
      <ThemedText type="title" style={{ color: "red" }}>STATS 1</ThemedText>
      <ThemedText type="title" style={{ color: "red" }}>STATS 1</ThemedText>
      <Button
        title="Ver detalles del perfil"
        onPress={() => router.push('/(tabs)/stats/details')}
        color="#FFA500"
      />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    color: "#fff",
    fontSize: 24,
  }
});
