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
    currentValue: `${value}`
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
  if(!currentValue){
    return
  }
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
  switch (type) {
    case "number":
      return handleNumber(value, state);
    case "operator":
      return {
        operator: value,
        previousValue: state.currentValue,
        currentValue: null
      };
    case "equal":
      return handleEqual(state);
    case "clear":
      return initialState;
    case "bcksp":

    if(state.currentValue){
          return{
            currentValue: null,
            output:null
          }
    }
    if(state.operator){
      console.log(state)
      return {
        operator:null,
        output:null,
        currentValue:state.previousValue,
        previousValue:null
      };
    }
      if(state.previousValue){
      return {
        previousValue:null,
        output:null
      };
      }
    case "percentage":
      return {
        currentValue: `${parseFloat(state.currentValue) * 0.01}`
      };
    default:
      return state;
  }
};

export default calculator;
