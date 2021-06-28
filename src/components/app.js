import { Router } from "preact-router";
import { useEffect, useState } from "preact/hooks";

import Header from "./header";

import Calculator from "../routes/calculator";
import History from "../routes/history";
import Redirect from "../routes/redirect";

const App = () => {
  const [darkMode, setDarkMode] = useState();

  const saveLocalTheme = (isDarkMode) => {
    if (typeof window !== "undefined") {
      if (!isDarkMode) localStorage.setItem("in-total-theme", "default");
      else if (isDarkMode) localStorage.setItem("in-total-theme", "dark");
    }
  };

  const handleTheme = () => {
    setDarkMode((prev) => {
      // if dark mode was on --> // disable dark mode local
      if (prev) saveLocalTheme(false);
      // if dark mode was off --> // enable dark mode local
      else if (!prev) saveLocalTheme(true);
      return !prev;
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localTheme = localStorage.getItem("in-total-theme");
      if (localTheme !== "dark") setDarkMode(false);
      else setDarkMode(true);
    }
  }, []);

  return (
    <div
      id="app"
      className={darkMode ? "default-theme dark-theme" : "default-theme"}
    >
      <div className="wrapper">
        <Header handleTheme={handleTheme} isDarkModeOn={darkMode} />
        <Router>
          <Redirect path="/" to="/calculator" />
          <Calculator path="/calculator" />
          <History path="/history" />
        </Router>
      </div>
    </div>
  );
};

export default App;
