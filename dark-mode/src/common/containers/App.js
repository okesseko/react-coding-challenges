import React, { createContext, useState } from "react";

export const ThemeMode = createContext({
  mode: "light",
  setMode: () => {},
});
export default function App({ children }) {
  const [mode, setMode] = useState("light");
  const values = { mode, setMode };
  return <ThemeMode.Provider value={values}>{children}</ThemeMode.Provider>;
}
