const actionValues = ["clear", "backspace", "=", "%"];

let subQuery = "";

const saveSubQuery = (query) => {
  subQuery = query;
};

export const getSubQuery = () => {
  return subQuery;
};

const createNewHistory = (entry) => {
  localStorage.setItem("in-total-history", JSON.stringify([entry]));
};

const updateHistory = (buttonValue, result) => {
  const entry = {
    query: `${subQuery} ${buttonValue} ${result}`,
    time: new Date().toLocaleString(),
  };

  console.log(entry);

  const history = JSON.parse(localStorage.getItem("in-total-history"));
  if (!history || history.length < 1) createNewHistory(entry);
  else
    localStorage.setItem(
      "in-total-history",
      JSON.stringify([entry, ...history])
    );
};

const handleActionValues = (buttonValue, currentQuery) => {
  const modQuery = currentQuery.replaceAll("÷", "/").replaceAll("x", "*");

  if (buttonValue === "clear") {
    subQuery = "";
    return "";
  }

  if (buttonValue === "%") {
    let queryString = currentQuery.replaceAll("/", "÷").replaceAll("*", "x");

    try {
      let result = eval(modQuery) / 100;
      saveSubQuery(`${queryString}%`);
      return result;
    } catch {
      return currentQuery;
    }
  }

  if (buttonValue === "backspace") return modQuery.slice(0, -1);

  if (buttonValue === "=") {
    let queryString = currentQuery.replaceAll("/", "÷").replaceAll("*", "x");

    let result = eval(modQuery).toString();
    if (result) {
      saveSubQuery(queryString);
      updateHistory(buttonValue, result);
      return result;
    }
    return currentQuery;
  }
};

export const updateQuery = (buttonValue, currentQuery) => {
  if (actionValues.includes(buttonValue)) {
    return handleActionValues(buttonValue, currentQuery.toString());
  }

  /* Restrict multiply and divide if query is empty */
  if (["÷", "x"].includes(buttonValue) && !currentQuery) return currentQuery;

  return currentQuery + buttonValue;
};
