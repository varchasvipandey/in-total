import style from "./historyEntry.styles.scss";

const HistoryEntry = ({ entry = {} }) => {
  return (
    <div
      key={entry.time}
      className={style.entry}
      // style={{ transform: "translateX(200%)" }}
    >
      <p className={style.entry__query}>{entry.query}</p>
      <p className={style.entry__time}>{entry.time}</p>
    </div>
  );
};

export default HistoryEntry;
