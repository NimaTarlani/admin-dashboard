import { useEffect, useState } from "react";

function ThemeSwitcher() {
  const darkThemes = [
    "dark",
    "forest",
    "dracula",
    "halloween",
    "black",
    "luxury",
    "business",
    "night",
    "coffee",
    "sunset",
    "dim",
    "abyss",
  ];
  const lightThemes = [
    "light",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "garden",
    "lofi",
    "pastel",
    "fantasy",
  ];
  const extraThemes = [
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "wireframe",
  ];

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "forest";
  });
  const ChangeHandler = (th) => {
    localStorage.setItem("theme", th);
    setTheme(th);
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <>
      <div className="flex flex-col">
        <span className="text-lg menu-title !p-1">Dark Themes:</span>
        <div>
          {darkThemes.map((thm) => (
            <button
              className={`m-1 btn ${thm == theme ? "btn-success" : ""}`}
              key={thm}
              onClick={() => ChangeHandler(thm)}
            >
              {thm}
            </button>
          ))}
        </div>
      </div>
      <div className="divider"></div>
      <div className="flex flex-col">
        <span className="text-lg menu-title !p-1">Light Themes:</span>
        <div>
          {lightThemes.map((thm) => (
            <button
              className={`m-1 btn ${thm == theme ? "btn-success" : ""}`}
              key={thm}
              onClick={() => ChangeHandler(thm)}
            >
              {thm}
            </button>
          ))}
        </div>
      </div>

      <div className="divider"></div>
      <div className="flex flex-col">
        <span className="text-lg menu-title !p-1">Extra Themes:</span>
        <div>
          {extraThemes.map((thm) => (
            <button
              className={`m-1 btn ${thm == theme ? "btn-success" : ""}`}
              key={thm}
              onClick={() => ChangeHandler(thm)}
            >
              {thm}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default ThemeSwitcher;
