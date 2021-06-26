import { Router } from "preact-router";

import Header from "./header";

import Calculator from "../routes/calculator";
import History from "../routes/history";

const App = () => {
  const handleTheme = () => {
    const appClasses = document.getElementById("app").classList;
    appClasses.toggle("dark-theme");
  };

  return (
    <div id="app" className="default-theme dark-theme">
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
