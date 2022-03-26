import React, { useState } from 'react';


function HookCounter() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementFive = () => {
      for(let i=0; i<5; i++) {
        // results 1
        //   setCount(count + 1)  
          setCount(prevCount => prevCount + 1)
      }
  }

  return (
      <div>
          Count: {count}
          <button onClick={() => setCount(initialCount)}>Reset</button>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
          <button onClick={incrementFive}>Increment 5</button>

          <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
          <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
      </div>
  );
}

export default HookCounter;
