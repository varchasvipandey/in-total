import style from "./button.styles.scss";

const Button = ({
  label = "",
  value = "",
  primary = false,
  handleButton = () => {},
}) => {
  return (
    // Disabled eslint for dangerous injection

    <div
      className={style.button}
      // eslint-disable-next-line
      dangerouslySetInnerHTML={{ __html: label }}
      style={
        primary ? { color: "var(--color-primary)", fontWeight: "700" } : {}
      }
      onClick={() => handleButton(value)}
    />
  );
};

export default Button;
