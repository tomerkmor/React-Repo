import React from "react";
import { ThemeContext } from "../../util/ThemeContextProvider.js";

export default function Header() {
  const themeCtx = useContext(ThemeContext);

  return (
    <header>
      <h1>Demo Website</h1>
      <button onClick={themeCtx.toggleTheme}>Toggle Theme</button>
    </header>
  );
}
