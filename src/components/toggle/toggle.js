import styles from "./toggle.style.scss";

const Toggle = ({ cta = () => {}, checked = false }) => {
  return (
    <label class={styles.switch}>
      <input type="checkbox" onChange={cta} checked={checked} />
      <span className={styles.slider}>{""}</span>
    </label>
  );
};

export default Toggle;
