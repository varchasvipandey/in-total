import style from "./display.style.scss";
import { useEffect } from "preact/hooks";

import { handleDisplayTextSize } from "./utils/handleDisplay";

const Display = ({
  mainDisplayValue = "",
  subDisplayValue = "",
  inputRef = null,
}) => {
  useEffect(() => {
    inputRef.current.style.fontSize = handleDisplayTextSize(mainDisplayValue);
  }, [mainDisplayValue, inputRef]);

  return (
    <div className={style.display}>
      <div className={style.display__query}>{subDisplayValue || "--x--"}</div>
      <input
        ref={inputRef}
        type="text"
        className={style.display__input}
        placeholder="0"
        value={mainDisplayValue}
        readOnly
      />
    </div>
  );
};

export default Display;
