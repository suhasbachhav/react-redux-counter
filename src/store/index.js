import {createStore} from 'redux';

const counterReducer = (state = {counter: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        counter: state.counter + action.amount
      };
    case 'DECREMENT':
      return {
        counter: state.counter - action.amount
      };
    case 'RESET':
      return {
        counter: 0
      };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;