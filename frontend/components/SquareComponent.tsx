import { COLORS } from '@/constants/Themes';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function SquareComponent({ children }: React.PropsWithChildren<{}>) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background_secondary,
    width: "100%",
    height: 240,
    borderRadius: 20,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: "0 0 8px rgba(0, 0, 0, 0.5)",
    margin: 10
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
    color: COLORS.primary,
  },
});