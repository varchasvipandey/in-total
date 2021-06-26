import { Link } from "preact-router/match";
import style from "./style.scss";

import GearIcon from "../gearIcon/gearIcon";

/* Config */
import { settingIconStyle } from "./config";

const Header = ({ handleTheme = () => {} }) => (
  <header>
    <div className="limit-width float-container">
      <GearIcon style={settingIconStyle} cta={handleTheme} />
    </div>
    <nav>
      <Link activeClassName={style.link__active} class={style.link} href="/">
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
