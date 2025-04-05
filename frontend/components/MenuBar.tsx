import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, StyleSheet, FlatList } from 'react-native';
import { Link } from 'expo-router';

// Importar iconos
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

// Colores
import { COLORS } from '@/constants/Themes';

export default function MenuBar() {
  const menu_items = [
    { 
      icon: <AntDesign name="home" style={styles.icon} />, 
      href: "/"
    },
    { 
      icon: <Ionicons name="stats-chart-outline" style={styles.icon} />, 
      href: "/stats" 
    },
    { 
      icon: <AntDesign name="user" style={styles.icon} />, 
      href: "/profile" 
    },
    { 
      icon: <AntDesign name="setting" style={styles.icon} />, 
      href: "/settings" 
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.navigationBar}>
        {
        menu_items.map((item, index) => (
          <Link key={index} href={item.href} asChild>
            <Pressable 
              style={ styles.button }>
                {item.icon}
            </Pressable>
          </Link>
        ))
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 0,
  },
  navigationBar: {
    width: "100%",
    height: 60,
    backgroundColor: COLORS.secondary,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    boxShadow: "0 0 8px rgba(0, 0, 0, 1)"
  },
  button: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 8,
    paddingRight: 8,
    width: "25%",
  },
  icon: {
    fontSize: 25,
    color: COLORS.primary,
  },
});