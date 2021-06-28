/* HISTORY */

import { useEffect, useState } from "preact/hooks";
import { route } from "preact-router";

import HistoryEntry from "../../components/historyEntry";
import ClearHistory from "../../components/clearHistory";

// gestures
import { handleTouchStart, handleTouchMove } from "../../utils/gesture";

const History = () => {
  const [history, setHistory] = useState([]);

  // Handle route switch on swipe
  const handleSwipe = (e) => {
    const direction = handleTouchMove(e);
    if (direction === "right") route("/");
  };

  // Handle clear history
  const clearHistory = () => {
    localStorage.removeItem("in-total-history");
    setHistory([]);
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
    >
      {/* Clear history entries */}
      {!!history?.length && (
        <div style={{ margin: "3.2rem 0 1.2rem 0" }}>
          <ClearHistory clearHistory={clearHistory} />
        </div>
      )}

      {/* Entries */}
      {!!history?.length &&
        history?.map((entry) => (
          <HistoryEntry key={entry.time} entry={entry} />
        ))}

      {/* No history */}
      {(!history || !history.length) && (
        <p
          style={{
            marginTop: "3.2rem",
            color: "var(--color-text)",
            fontSize: "2.4rem",
            textAlign: "center",
          }}
        >
          No calculation history
        </p>
      )}
    </div>
  );
};

export default History;
