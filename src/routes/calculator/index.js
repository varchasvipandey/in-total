/* CALCULATOR */

import { useState, useRef, useEffect } from "preact/hooks";
import { route } from "preact-router";

import style from "./style.scss";

import { Display, InputPanel } from "../../components/calculator";

import {
  buttons,
  keyboardInputValues,
  allowedKeyboardEntries,
} from "./utils/config";
import { updateQuery, getSubQuery } from "./utils/calculation";

// gestures
import { handleTouchStart, handleTouchMove } from "../../utils/gesture";

const Calculator = () => {
  const inputRef = useRef();

  const [calculationInput, setCalculationInput] = useState("");
  const [subDisplayValue, setSubDisplayValue] = useState("");

  const handleSwipe = (e) => {
    const direction = handleTouchMove(e);
    if (direction === "left") route("/history");
  };

  const handleButton = (value) => {
    const updatedCalculationInput = updateQuery(value, calculationInput);
    setCalculationInput(updatedCalculationInput);
    setSubDisplayValue(getSubQuery());
  };

  const handleKeyboardInput = (e) => {
    if (allowedKeyboardEntries.includes(e.key)) {
      let value = keyboardInputValues[allowedKeyboardEntries.indexOf(e.key)];
      handleButton(value);
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div
      className="limit-width container center bottom"
      onTouchMove={handleSwipe}
      onTouchStart={handleTouchStart}
      onKeyDown={handleKeyboardInput}
    >
      <div className={style.calculator}>
        <Display
          mainDisplayValue={calculationInput}
          subDisplayValue={subDisplayValue}
          inputRef={inputRef}
        />
        <InputPanel buttons={buttons} handleButton={handleButton} />
      </div>
    </div>
  );
};

export default Calculator;
