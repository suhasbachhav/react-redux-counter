import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { ACTIONTYPE } from '../store';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const showCounterData = useSelector(state => state.showCounter);

  const counterHandler = (type, amount) => {
    dispatch({ type, amount });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounterData && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={()=>counterHandler(ACTIONTYPE.INCREMENT, 1)}>Increment</button>
        <button onClick={()=>counterHandler(ACTIONTYPE.DECREMENT, 1)}>Decrement</button>

        <button onClick={()=>counterHandler(ACTIONTYPE.RESET, 1)}>Reset</button>

        <button onClick={()=>counterHandler(ACTIONTYPE.INCREMENT, 10)}>Increment by 10</button>
        <button onClick={()=>counterHandler(ACTIONTYPE.DECREMENT, 10)}>Decrement by 10 </button>
      </div>
      <button onClick={()=>counterHandler(ACTIONTYPE.TOGGLE, 1)}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
