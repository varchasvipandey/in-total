import { Router } from "preact-router";

import Header from "./header";

import Calculator from "../routes/calculator";
import History from "../routes/history";

const App = () => {
  let darkMode = window.localStorage.getItem("in-total-theme") === "dark"; // default dark theme

  let appClassNames = darkMode ? "default-theme dark-theme" : "default-theme";

  const handleTheme = () => {
    const appClasses = document.getElementById("app").classList;
    appClasses.toggle("dark-theme");
    appClasses.value.includes("dark-theme")
      ? window.localStorage.setItem("in-total-theme", "dark")
      : window.localStorage.setItem("in-total-theme", "default");
  };

  return (
    <div id="app" className={appClassNames}>
      <div className="wrapper">
        <Header handleTheme={handleTheme} />
        <Router>
          <Calculator path="/" />
          <History path="/history" />
        </Router>
      </div>
    </div>
  );
};

export default App;
