// import { useState, useEffect } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export function useAuth() {
//   const [user, setUser] = useState<null | { name: string; token: string }>(null);

//   useEffect(() => {
//     const loadUser = async () => {
//       const token = await AsyncStorage.getItem("token");
//       if (token) setUser({ name: "Usuario", token });
//     };
//     loadUser();
//   }, []);

//   const login = async (token: string) => {
//     await AsyncStorage.setItem("token", token);
//     setUser({ name: "Usuario", token });
//   };

//   const logout = async () => {
//     await AsyncStorage.removeItem("token");
//     setUser(null);
//   };

//   return { user, login, logout };
// }