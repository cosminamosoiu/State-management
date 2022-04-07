import { store } from './createStore';
export const actions = {
  increment: { type: 'increment' },
  decrement: { type: 'decrement' },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + 1,
      };
    case 'decrement':
      return {
        count: state.count - 1,
      };

    default:
      return state;
  }
};
