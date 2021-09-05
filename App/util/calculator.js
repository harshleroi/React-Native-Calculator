export const initialState = {
  currentValue: "0",
  operator: null,
  previousValue: null,
  output:null
};

export const handleNumber = (value, state) => {
  if (state.currentValue === "0") {
    return { currentValue: `${value}` };
  }
  return {
    currentValue: `${state.currentValue}${value}`
  };
};

export const handleEqual = state => {
  const { currentValue, previousValue, operator } = state;
  const current = parseFloat(currentValue);
  const previous = parseFloat(previousValue);
  const resetState = {
    operator: null,
    previousValue: null
  };

  if (operator === "/") {
    return {
      output: previous / current,
      // ...resetState
    };
  }

  if (operator === "*") {
    return {
      output: previous * current,
      // ...resetState
    };
  }

  if (operator === "+") {
    console.log('+')
    return {
      output: previous + current,
      // ...resetState
    };
  }

  if (operator === "-") {
    return {
      output: previous - current,
      // ...resetState
    };
  }

  return state;
};

const calculator = (type, value, state) => {
  console.log(typeof value)
  switch (type) {
    case "number":
      return handleNumber(value, state);
    case "operator":
      return {
        operator: value,
        previousValue: state.currentValue,
        currentValue: "0"
      };
    case "equal":
      return handleEqual(state);
    case "clear":
      return initialState;
    case "posneg":
      return {
        currentValue: `${parseFloat(state.currentValue) * -1}`
      };
    case "percentage":
      return {
        currentValue: `${parseFloat(state.currentValue) * 0.01}`
      };
    default:
      return state;
  }
};

export default calculator;
