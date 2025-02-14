import { useTheme } from "../Context/Theme";

const ThemeToggler = () => {
  const {toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        border: "none",
        borderRadius: "5px",
        marginTop: "20px",


        
      }}
    >
      Toggle Theme
    </button>
  );
};

export default ThemeToggler;
