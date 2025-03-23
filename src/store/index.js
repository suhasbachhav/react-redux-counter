import {createStore} from 'redux';

const counterReducer = createStore((state = {counter: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        counter: state.count + 1
      };
    case 'DECREMENT':
      return {
        counter: state.count - 1
      };
    case 'RESET':
      return {
        counter: 0
      };
    default:
      return state;
  }
});

const store = createStore(counterReducer);

export default store;