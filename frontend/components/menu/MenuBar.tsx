import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, StyleSheet, FlatList } from 'react-native';
import { Link } from 'expo-router';

// Importar iconos
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

// Colores
import { COLORS } from '@/constants/Themes';

export default function MenuBar() {
  useEffect(() => {

  })

  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => setIsPressed(!isPressed);

  const menu_items = [
    { name: "Home", icon: <AntDesign name="home" style={styles.icon} />, href: "/" },
    { name: "Estadisticas", icon: <Ionicons name="stats-chart-outline" style={styles.icon} />, href: "/stats" },
    { name: "Profile", icon: <AntDesign name="user" style={styles.icon} />, href: "/profile" },
    { name: "Settings", icon: <AntDesign name="setting" style={styles.icon} />, href: "/settings" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.navigationBar}>
        {/* Items Dinamicos */}
        {menu_items.map((item, index) => (
          <Link key={index} href={item.href} asChild>
            <Pressable 
              style={ styles.button } 
              onPressIn={handlePress}>
                {item.icon}
                <Text style={styles.text_item}>{item.name}</Text>
            </Pressable>
          </Link>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5
  },
  navigationBar: {
    width: "100%",
    height: 70,
    color: "white",
    backgroundColor: COLORS.secondary,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    margin: 5,
  },
  button: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  icon: {
    fontSize: 25,
    color: COLORS.primary,
  },
  text_item: {
    color: "white",
    fontSize: 10,
  },
});