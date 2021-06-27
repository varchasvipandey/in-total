/* HISTORY */

import style from "./style.scss";

import { useEffect, useState } from "preact/hooks";
import { route } from "preact-router";

// gestures
import { handleTouchStart, handleTouchMove } from "../../utils/gesture";

const History = () => {
  const [history, setHistory] = useState([]);

  const handleSwipe = (e) => {
    const direction = handleTouchMove(e);
    if (direction === "right") route("/");
  };

  useEffect(() => {
    const current = JSON.parse(localStorage.getItem("in-total-history"));
    if (current && !current.length) setHistory([current]);
    else if (current && current.length) setHistory(current);
  }, []);

  return (
    <div
      className="limit-width container"
      onTouchMove={handleSwipe}
      onTouchStart={handleTouchStart}
      // TODO: Detect touch angle
    >
      {history?.map((entry) => (
        <div key={entry.time} className={style.entry}>
          <p className={style.entry__query}>{entry.query}</p>
          <p className={style.entry__time}>{entry.time}</p>
        </div>
      ))}
    </div>
  );
};

export default History;
