import { createStore } from './Store';
import { reducer } from './counterActions';

const initialState = {
  count: 0,
};

const store = createStore(reducer, initialState);

export default store;
