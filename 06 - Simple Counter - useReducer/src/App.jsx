import React from "react";

export const counterReducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return { count: state.count + 1 };
  } else if (action.type === "DECREMENT") {
    return { count: state.count - 1 };
  } else if (action.type === "RESET") {
    return { count: 0 };
  }
};

function App() {
  const [counterState, counterDispatch] = React.useReducer(counterReducer, {
    count: 0,
  });

  const handleAdd = () => {
    counterDispatch({
      type: "INCREMENT",
      payload: 1,
    });
  };

  const handleSub = () => {
    counterDispatch({
      type: "DECREMENT",
      payload: 1,
    });
  };

  const handleReset = () => {
    counterDispatch({
      type: "RESET",
      payload: 0,
    });
  };

  return (
    <div id="app">
      <h1>{counterState.count}</h1>

      <p id="actions">
        <button onClick={handleAdd}>Increment</button>
        <button onClick={handleSub}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </p>
      <p id="counter"></p>
    </div>
  );
}

export default App;
