import * as ClipboardAPI from 'expo-clipboard';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default function PrivateUserID({ userID }: { userID: string }) {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  const displayValue = visible ? userID : '*'.repeat(userID.length);

  const handleCopy = async () => {
    await ClipboardAPI.setStringAsync(userID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>ID del Usuario</Text>
      <View style={styles.row}>
        <Text style={styles.code}>{displayValue}</Text>
        <TouchableOpacity onPress={() => setVisible(!visible)}>
          <Text style={styles.toggle}>
            {visible ? 'Ocultar' : 'Mostrar'}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.copyButton} onPress={handleCopy}>
        <Text style={styles.copyText}>
          {copied ? '¡Copiado!' : 'Copiar'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1a1a1a',
    padding: 16,
    borderRadius: 12,
    alignItems: 'flex-start',
    gap: 8,
    margin: 8
  },
  label: {
    color: '#aaa',
    fontSize: 14,
    marginBottom: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  code: {
    fontSize: 18,
    letterSpacing: 2,
    color: '#FFA500',
  },
  toggle: {
    color: '#FFA500',
    fontSize: 14,
  },
  copyButton: {
    marginTop: 8,
    backgroundColor: '#FFA500',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  copyText: {
    color: '#000',
    fontWeight: 'bold',
  },
});
