// components/CustomHeader.tsx

import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface HeaderProps {
  title: string;
  onPressLeft?: () => void;
}

export const BackMenuBar = ({ title, onPressLeft }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressLeft} style={styles.iconButton}>
        <Ionicons name="arrow-back" size={24} color="#FFA500" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightSpace} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000', // Negro
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    elevation: 4,
    shadowColor: '#FFA500',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 2 },
  },
  iconButton: {
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFA500', // Naranja
    textAlign: 'center',
    flex: 1,
  },
  rightSpace: {
    width: 32, // Igual al botón izquierdo para centrar el título
  },
});
