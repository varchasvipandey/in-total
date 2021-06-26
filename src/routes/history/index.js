/* HISTORY */

import style from "./style.scss";

import { useEffect, useState } from "preact/hooks";
// import { route } from "preact-router";

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const current = JSON.parse(localStorage.getItem("in-total-history"));
    if (current && !current.length) setHistory([current]);
    else if (current && current.length) setHistory(current);
  }, []);

  const handleSwipe = (e) => {
    const { clientX, clientY, screenX, screenY } = e.changedTouches[0];
    console.log({ clientX, clientY, screenX, screenY });
  };

  return (
    <div
      className="limit-width container"
      onTouchMove={handleSwipe}
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
