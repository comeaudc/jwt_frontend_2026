import { createContext, useMemo, useContext } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [cookies, setCookies, removeCookie] = useCookies();

  async function login(formData) {
    let res = await axios.post("http://localhost:3000/api/auth", formData);

    setCookies("token", res.data.token);
  }

  async function signUp(formData) {
    let res = await axios.post("http://localhost:3000/api/user", formData);

    setCookies("token", res.data.token);
  }

  function logout() {
    ["token"].forEach((token) => removeCookie(token));
  }

  // Use memo, stores a value from computationally functions and will not rerun those functions as long as the value doesnt change
  // As long as cookies doesnt change, we dont need to rerun any of these functions
  const value = useMemo(
    () => ({
      cookies,
      login,
      logout,
      signUp,
    }),
    [cookies],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Optional cheeky function to prevent excessive imports
// Otherwise
// import {useContext} from 'react';
// import {AuthContext} from '';
export function useAuth() {
  return useContext(AuthContext);
}
