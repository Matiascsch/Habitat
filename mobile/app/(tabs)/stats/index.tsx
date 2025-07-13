import DashboardStats from '@/components/DashboardStats';
import ThemedText from '@/components/ui/text/ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useRouter } from 'expo-router';
import { Button, ScrollView, StyleSheet } from 'react-native';

export default function StatsScreen() {
  const theme = useThemeColor();
  const router = useRouter();

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background_section }]}>
      <ThemedText type="title" style={{ color: "orange" }}>Estadisticas</ThemedText>

      <Button
        title="Ver detalles del perfil"
        onPress={() => router.push('/(tabs)/stats/details')}
        color="#FFA500"
      />
      
      <DashboardStats />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    color: "#fff",
    fontSize: 24,
  }
});
