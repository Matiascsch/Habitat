import { COLORS, SHADOWS } from '@/constants/Themes';
import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';


interface SquareComponentProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export default function SquareComponent({ children, style }: SquareComponentProps) {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background_secondary,
    width: "100%",
    height: 240,
    borderRadius: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: SHADOWS.small,
    margin: 10
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
    color: COLORS.primary,
  },
});