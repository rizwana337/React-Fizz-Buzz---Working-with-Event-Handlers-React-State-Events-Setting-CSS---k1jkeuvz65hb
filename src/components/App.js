import React, { useState } from 'react';
import '../styles/App.css';

const App = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  let counterClass = "normal";

  if (count % 3 === 0 && count % 5 === 0) {
    counterClass = "fizzbuzz";
  } else if (count % 3 === 0) {
    counterClass = "fizz";
  } else if (count % 5 === 0) {
    counterClass = "buzz";
  }

  return (
    <div id="main">
      <div id="counter" className={counterClass}>
        {count}
      </div>
      <button id="increment" onClick={handleIncrement}>
        Increment
      </button>
      <button id="decrement" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
};

export default App;
