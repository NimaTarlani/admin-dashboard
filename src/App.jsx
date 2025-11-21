import { useEffect, useState } from "react";
import AppRoutes from "./routes";

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "forest";
  });
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, []);
  return <AppRoutes />;
}
