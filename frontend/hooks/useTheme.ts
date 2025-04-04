import { useColorScheme } from "react-native";

export function useTheme() {
  const scheme = useColorScheme();
  return scheme === "dark" ? "black" : "white";
}