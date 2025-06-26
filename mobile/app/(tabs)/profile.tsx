import ThemedText from '@/components/ui/text/ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Platform, ScrollView, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const theme = useThemeColor();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.background }}>
      <ThemedText type="title" style={{color: "red"}}>PROFILE 1</ThemedText>
      <ThemedText type="title">PROFILE 1</ThemedText>
      <ThemedText type="title">PROFILE 1</ThemedText>
      <ThemedText type="title">PROFILE 1</ThemedText>
      <ThemedText type="title">PROFILE 1</ThemedText>
      <ThemedText type="title">PROFILE 1</ThemedText>
      <ThemedText type="title">PROFILE 1</ThemedText>
      <ThemedText type="title">PROFILE 1</ThemedText>
      <ThemedText type="title">PROFILE 1</ThemedText>
      <ThemedText type="title">PROFILE 1</ThemedText>
      <ThemedText type="title">PROFILE 1</ThemedText>
      <ThemedText type="title">PROFILE 1</ThemedText>
      <ThemedText type="title">PROFILE 1</ThemedText>
      <ThemedText type="title">PROFILE 1</ThemedText>
      <ThemedText type="title">PROFILE 1</ThemedText>
      <ThemedText type="title">PROFILE 1</ThemedText>
      <ThemedText type="title">PROFILE 1</ThemedText>
      <ThemedText type="title">PROFILE 1</ThemedText>
      <ThemedText type="title">PROFILE 1</ThemedText>
      <ThemedText type="title">PROFILE 1</ThemedText>
      <ThemedText type="title">PROFILE 1</ThemedText>
      <ThemedText type="title">PROFILE 1</ThemedText>
      <ThemedText type="title">PROFILE 1</ThemedText>
      <ThemedText type="title">PROFILE 1</ThemedText>
      <ThemedText type="title">PROFILE 1</ThemedText>
      <ThemedText type="title">PROFILE 1</ThemedText>
      <ThemedText type="title">PROFILE 1</ThemedText>
      <ThemedText type="title">PROFILE 1</ThemedText>
      <ThemedText type="title">PROFILE 1</ThemedText>
      <ThemedText type="title">PROFILE 1</ThemedText>
      <ThemedText type="title">PROFILE 1</ThemedText>
      <ThemedText type="title">PROFILE 1</ThemedText>
      <ThemedText type="title">PROFILE 1</ThemedText>
      <ThemedText type="title">PROFILE 1</ThemedText>
      <ThemedText type="title">PROFILE 1</ThemedText>
      <ThemedText type="title">PROFILE 1</ThemedText>
      <ThemedText type="title">PROFILE 1</ThemedText>
      <ThemedText type="title">PROFILE 1</ThemedText>
      <ThemedText type="title">PROFILE 1</ThemedText>
      <ThemedText type="title">PROFILE 1</ThemedText>
      <ThemedText type="title">PROFILE 1</ThemedText>
      <ThemedText type="title" style={{color: "red"}}>PROFILE 1</ThemedText>
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
