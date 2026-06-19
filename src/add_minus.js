import { useState } from 'react';

const Counter = (props) => {
  const { count, increment, decrement } = props;
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}> Decrease</button>
    </div>
  );
};

const CounterContainer = () => {
  const [count, setCount] = useState(0);
  const incremenet = () => setState(count + 1);
  const decrement = () => setState(count - 1);
  return <Counter count={count} incremenet={incremenet} decrement={decrement} />;
};

export default CounterContainer;