import { AddNewCard } from '@/components/ui/cards/AddNewCard';
import ThemedText from '@/components/ui/text/ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Image, ScrollView, StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  const theme = useThemeColor();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.background_section }}>

      <View style={{ boxShadow: '0 2px 5px rgba(0, 0, 0, 0.9)' }}>
        <Image source={require('@/assets/images/partial-react-logo.png')} style={{
          width: '100%',
          height: 200,
          resizeMode: 'cover',
        }} />
      </View>

      <View style={styles.container}>
        <ThemedText type="title" style={{ textAlign: "left", width: "100%" }}>Tus Habitats</ThemedText>
        <View style={styles.scrollView}>
          <AddNewCard />
          <AddNewCard />
          <AddNewCard />
        </View>
      </View>

      <View style={styles.container}>
        <ThemedText type="title" style={{ textAlign: "left", width: "100%" }}>Tus Habitats</ThemedText>
        <View style={styles.scrollView}>
          <AddNewCard />
          <AddNewCard />
          <AddNewCard />
        </View>
      </View>

      <View style={styles.container}>
        <ThemedText type="title" style={{ textAlign: "left", width: "100%" }}>Tus Habitats</ThemedText>
        <View style={styles.scrollView}>
          <AddNewCard />
          <AddNewCard />
          <AddNewCard />
        </View>
      </View>

      <View style={styles.container}>
        <ThemedText type="title" style={{ textAlign: "left", width: "100%" }}>Tus Habitats</ThemedText>
        <View style={styles.scrollView}>
          <AddNewCard />
          <AddNewCard />
          <AddNewCard />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 8,
    color: "#fff",
    fontSize: 24,
    padding: 16,
    width: "100%"
  },
  scrollView: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 8,
  },
});
