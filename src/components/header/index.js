import { Link } from "preact-router/match";
import style from "./style.scss";

import Toggle from "../toggle/toggle";

const Header = ({ handleTheme = () => {}, isDarkModeOn = false }) => (
  <header>
    <div className="limit-width float-container">
      <div className={style.toggleContainer}>
        <Toggle cta={handleTheme} checked={isDarkModeOn} />
      </div>
    </div>
    <nav>
      <Link
        activeClassName={style.link__active}
        class={style.link}
        href="/calculator"
      >
        Home
      </Link>
      <Link
        activeClassName={style.link__active}
        class={style.link}
        href="/history"
      >
        History
      </Link>
    </nav>
  </header>
);

export default Header;
