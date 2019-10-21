import {ADD, REMOVE} from './constants';

const initialState = {
  todos: ['Click to remove', 'Learn React Native', 'Write Code', 'Ship App'],
};

export const reducer = (state = initialState, action) => {
  const {todos} = state;
  const {type, payload} = action;

  switch (type) {
    case ADD: {
      return {
        ...state,
        todos: [payload, ...todos],
      };
    }
    case REMOVE: {
      return {
        ...state,
        todos: todos.filter((todo, i) => i !== payload),
      };
    }
  }

  return state;
};
