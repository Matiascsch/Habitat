import { useThemeColor } from '@/hooks/useThemeColor';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileScreen() {
  const theme = useThemeColor();
  const router = useRouter();

  const userLogged = {
    name: "Mati Carballo",
    email: "mati@example.com"
  } // useUserLogged();

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background_section }]}>
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=56' }} // Puedes cambiarlo por una imagen real
          style={styles.avatar}
        />
        <Text style={styles.name}>{userLogged.name}</Text>
        <Text style={styles.email}>{userLogged.email}</Text>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/profile/details')}>
          <Ionicons name="settings-outline" size={18} color="#000" />
          <Text style={styles.buttonText}>Editar Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={() => console.log('Logout')}>
          <Ionicons name="log-out-outline" size={18} color="#000" />
          <Text style={styles.buttonText}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.optionsList}>
        {[
          { title: 'Detalles del perfil', icon: 'person-outline', url: '/(tabs)/profile/details' },
          { title: 'Seguridad', icon: 'shield-checkmark-outline', url: '/(tabs)/profile/security' },
          { title: 'Notificaciones', icon: 'notifications-outline', url: '/(tabs)/profile/notifications' },
        ].map((item, idx) => (
          <TouchableOpacity
            key={idx}
            style={styles.option}
            onPress={() => router.push(item.url)}
          >
            <Ionicons name={item.icon as any} size={22} color="#FFA500" />
            <Text style={styles.optionText}>{item.title}</Text>
            <Ionicons name="chevron-forward-outline" size={18} color="#666" />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 2,
    borderColor: '#FFA500',
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFA500',
  },
  email: {
    fontSize: 14,
    color: '#999',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 32,
  },
  button: {
    flex: 1,
    backgroundColor: '#FFA500',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  logoutButton: {
    backgroundColor: '#FF6347',
  },
  buttonText: {
    color: '#000',
    fontWeight: '600',
  },
  optionsList: {
    borderTopWidth: 1,
    borderTopColor: '#333',
    paddingTop: 16,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#222',
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
    flex: 1,
  },
});
