import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
  Dimensions,
  Alert,
} from 'react-native';

import { DevSettings } from 'react-native';


const { width } = Dimensions.get('window');
const ORANGE = '#FF7A00';
const BLACK = '#121212';

const LoginRegisterScreen = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isRegistering ? 1 : 0,
      duration: 500,
      easing: Easing.out(Easing.exp),
      useNativeDriver: false,
    }).start();
  }, [isRegistering]);

  const translateX = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -width],
  });

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Completa todos los campos');
      return;
    }
    DevSettings.reload();
  };

  const handleRegister = () => {
    if (!nombre || !apellido || !email || !password) {
      Alert.alert('Error', 'Completa todos los campos');
      return;
    }
    Alert.alert('Registro', `Registrado como: ${nombre} ${apellido}`);
    setIsRegistering(false);
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.slider,
          { transform: [{ translateX }] },
        ]}
      >
        {/* Login Form */}
        <View style={styles.form}>
          <Text style={styles.title}>Iniciar Sesión</Text>
          <TextInput
            placeholder="Correo electrónico"
            placeholderTextColor="#aaa"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="Contraseña"
            placeholderTextColor="#aaa"
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Ingresar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setIsRegistering(true)}>
            <Text style={styles.switchText}>¿No tenés cuenta? <Text style={styles.link}>Registrate</Text></Text>
          </TouchableOpacity>
        </View>

        {/* Register Form */}
        <View style={styles.form}>
          <Text style={styles.title}>Crear Cuenta</Text>
          <TextInput
            placeholder="Nombre"
            placeholderTextColor="#aaa"
            style={styles.input}
            value={nombre}
            onChangeText={setNombre}
          />
          <TextInput
            placeholder="Apellido"
            placeholderTextColor="#aaa"
            style={styles.input}
            value={apellido}
            onChangeText={setApellido}
          />
          <TextInput
            placeholder="Correo electrónico"
            placeholderTextColor="#aaa"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="Contraseña"
            placeholderTextColor="#aaa"
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Registrarme</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setIsRegistering(false)}>
            <Text style={styles.switchText}>¿Ya tenés cuenta? <Text style={styles.link}>Ingresar</Text></Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

export default LoginRegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLACK,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider: {
    flexDirection: 'row',
    width: width
  },
  form: {
    width,
    padding: 32,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: ORANGE,
    textAlign: 'center',
    marginBottom: 32,
  },
  input: {
    backgroundColor: '#1E1E1E',
    color: 'white',
    padding: 14,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  button: {
    backgroundColor: ORANGE,
    padding: 14,
    borderRadius: 8,
    marginTop: 8,
    marginBottom: 16,
  },
  buttonText: {
    textAlign: 'center',
    color: BLACK,
    fontWeight: 'bold',
    fontSize: 16,
  },
  switchText: {
    color: '#ccc',
    textAlign: 'center',
    marginTop: 12,
  },
  link: {
    color: ORANGE,
    fontWeight: 'bold',
  },
});
