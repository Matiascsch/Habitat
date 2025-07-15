import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';
import { Text, TextProps, TextStyle } from 'react-native';

// Tipos posibles para la variante del texto
type TextType = 'body' | 'title' | 'caption';

interface ThemedTextProps extends TextProps {
  children: React.ReactNode;
  style?: TextStyle | TextStyle[];
  type?: TextType;
}

const getFontSizeByType = (type: TextType = 'body'): number => {
  switch (type) {
    case 'title':
      return 18;
    case 'caption':
      return 12;
    case 'body':
    default:
      return 16;
  }
};

const ThemedText: React.FC<ThemedTextProps> = ({ children, type = 'body', style, ...props }) => {
  const theme = useThemeColor();
  const fontSize = getFontSizeByType(type);

  return (
    <Text
      style={[{ color: theme.text, fontSize }, style]}
      {...props}
    >
      {children}
    </Text>
  );
};

export default ThemedText;
