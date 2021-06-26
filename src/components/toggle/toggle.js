import styles from "./toggle.style.scss";

const Toggle = ({ handleTheme = () => {} }) => {
  return (
    <label class={styles.switch}>
      <input type="checkbox" onChange={handleTheme} />
      <span className={styles.slider}>{""}</span>
    </label>
  );
};

export default Toggle;
