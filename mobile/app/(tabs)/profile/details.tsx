import { BackMenuBar } from '@/components/BackMenuBar'; // Si usás el header personalizado
import ThemedText from '@/components/ui/ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function ProfileDetails() {
    const theme = useThemeColor();
    const router = useRouter();

    return (
        <View style={[styles.container, { backgroundColor: theme.background_section }]}>
            <BackMenuBar title="Detalles del perfil" onPressLeft={() => router.replace("/(tabs)/profile")} />
            <View style={styles.content}>
                <ThemedText type='caption' style={styles.text}>• Cambiar contraseña</ThemedText>
                <ThemedText type='caption' style={styles.text}>• Configurar notificaciones</ThemedText>
                <ThemedText type='caption' style={styles.text}>• Ver actividad</ThemedText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        padding: 20,
    },
    text: {
        color: '#FFA500',
        fontSize: 16,
        marginBottom: 12,
    },
});
