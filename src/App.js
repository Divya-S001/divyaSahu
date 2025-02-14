import { ThemeProvider, useTheme } from "./Context/Theme"; // ✅ Fixed import path
import Toggler from './Component/Toggler';

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: theme === "light" ? "#fff" : "#222",
        color: theme === "light" ? "#000" : "#fff",
        transition: "background 0.3s ease, color 0.3s ease",
      }}
    >
      <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>
      <Toggler />
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
