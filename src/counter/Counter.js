import store from './createStore';
import { useState, useEffect } from 'react';
import './Counter.css';

const Counter = () => {
  const [newCount, setNewCount] = useState(store.getState());

  useEffect(() => {
    store.subscribe(() => {
      setNewCount(store.getState());
    });
  }, []);

  function increment() {
    store.dispatch({ type: 'increment' });
  }

  function decrement() {
    store.dispatch({ type: 'decrement' });
  }

  return (
    <div className='counterDiv'>
      <button onClick={increment}>Add </button>
      <button onClick={decrement}>Substract</button>
      <p>The count is: {newCount.count}</p>
    </div>
  );
};

export default Counter;
