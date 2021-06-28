import style from "./clearHistory.styles.scss";

import clearIcon from "../../assets/clear-icon.png";

const ClearHistory = ({ clearHistory = () => {} }) => {
  return (
    <div className={style.clearIcon}>
      <div className={style.clearIcon__button} onClick={clearHistory}>
        <p>Clear history</p>
        <img src={clearIcon} alt="clear history" />
      </div>
    </div>
  );
};

export default ClearHistory;
