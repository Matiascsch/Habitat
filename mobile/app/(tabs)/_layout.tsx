import { Tabs } from 'expo-router';
import React, { Fragment } from 'react';
import { Platform , Text } from 'react-native';


export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { display: "none" }
      }}>
    </Tabs>
  );
}
