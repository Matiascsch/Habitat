import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { MenuBar } from '@/components/MenuBar';
import { useThemeColor } from '@/hooks/useThemeColor';
import { esperarYRetornar } from '@/hooks/useUserLogged';
import LoginScreen from './login';


export default function RootLayout() {
  const theme = useThemeColor();
  const [userLogged, setUserLogged] = useState<boolean | null>(null);
  const [loaded] = useFonts({ SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf') });

  useEffect(() => {
    const fetchLoginStatus = async () => {
      const result = await esperarYRetornar(); // simulación de login
      setUserLogged(result);
    };
    fetchLoginStatus();
  }, []);

  const handleLoginSuccess = () => {
    setUserLogged(true);
  };

  if (!loaded || userLogged === null) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={theme.primary} />
      </View>
    );
  }

  if (!userLogged) {
    return (
      <SafeAreaView style={styles.safeAreaStyles}>
        <StatusBar style="auto" />
        <LoginScreen onLoginSuccess={handleLoginSuccess} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeAreaStyles}>
      <StatusBar style="auto" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="+not-found" />
      </Stack>
      <MenuBar />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeAreaStyles: {
    flex: 1, 
    backgroundColor: 'black'
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});