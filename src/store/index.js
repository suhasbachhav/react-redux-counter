import {createStore} from 'redux';

const initialState = {
  counter: 0,
  showCounter: true
};

export const ACTIONTYPE = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
  TOGGLE: 'TOGGLE'
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONTYPE.INCREMENT:
      return {
        counter: state.counter + action.amount,
        showCounter: state.showCounter
      };
    case ACTIONTYPE.DECREMENT:
      return {
        counter: state.counter - action.amount,
        showCounter: state.showCounter
      };
    case ACTIONTYPE.RESET:
      return {
        counter: 0,
        showCounter: state.showCounter
      };
    case ACTIONTYPE.TOGGLE:
      return {
        counter: state.counter,
        showCounter: !state.showCounter
      };
    default:
      return state;
  }


};

const store = createStore(counterReducer);

export default store;