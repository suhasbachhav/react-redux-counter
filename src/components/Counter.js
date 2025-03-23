import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  const toggleCounterHandler = () => {};

  const counterHandler = (type, amount) => {
    dispatch({ type, amount });
  };

  const resetHandler = () => {
    dispatch({ type: 'RESET' });
  };
  
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={()=>counterHandler('INCREMENT', 1)}>Increment</button>
        <button onClick={()=>counterHandler('DECREMENT', 1)}>Decrement</button>
        <button onClick={resetHandler}>Reset</button>

        <button onClick={()=>counterHandler('INCREMENT', 10)}>Increment by 10</button>
        <button onClick={()=>counterHandler('DECREMENT', 10)}>Decrement by 10 </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
