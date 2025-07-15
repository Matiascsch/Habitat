import { BackMenuBar } from '@/components/BackMenuBar'; // Si usás el header personalizado
import PrivateUserID from '@/components/ui/PrivateUserID';
import ThemedText from '@/components/ui/ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function ProfileSecurity() {
    const theme = useThemeColor();
    const router = useRouter();

    return (
        <View style={[styles.container, { backgroundColor: theme.background_section }]}>
            <BackMenuBar title="Seguridad" onPressLeft={() => router.replace("/(tabs)/profile")} />
            <PrivateUserID userID="USRX4K8P91Z8" />
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
