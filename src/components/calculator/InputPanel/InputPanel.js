import Button from "./Button/Button";
import style from "./inputPanel.styles.scss";

const InputPanel = ({ buttons = [], handleButton = () => {} }) => {
  return (
    <div className={style.container}>
      {!!buttons?.length &&
        buttons?.map((buttonList, i) => (
          <div key={i} className={style.container__panel}>
            {!!buttonList?.length &&
              buttonList?.map((button) => (
                <Button
                  key={button.label}
                  label={button.label}
                  value={button.value}
                  primary={button.primary}
                  handleButton={handleButton}
                />
              ))}
          </div>
        ))}
    </div>
  );
};

export default InputPanel;
