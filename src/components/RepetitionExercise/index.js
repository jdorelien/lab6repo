import { useState } from 'react'

export default function IncrementCounter() {
  const [count, setCount] = useState(0);

  function handleIncre() {
    setCount(count + 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncre}>Increment</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
