import { combineReducers } from 'redux';
import { actionTypes, fields } from './constants';

const initialTaskState = {
  [fields.NAME]: '',
  [fields.DESCRIPTION]: '',
  [fields.PRIORITY]: 0,
  [fields.NAME + '_ERROR']: '',
  [fields.DESCRIPTION + '_ERROR']: '',
};



export const taskReducer = (state = initialTaskState, action) => {

  const {type, payload} = action;

  switch (type) {
    case actionTypes.UPDATE_FIELD: {
      return {
        ...state,
        [payload.field]: payload.data,
      };
    }
    case actionTypes.VALIDATE_FIELD: {
      return {
        ...state,
        [payload.field + '_ERROR']: payload.data,
      };
    }
    case actionTypes.CLEAR_TASK: {
      return initialTaskState;
    }
    
  }

  return state;
};

const initialTaskListState = [];

export const taskListReducer = (state = initialTaskListState, action) => {
  const {todos} = state;
  const {type, payload} = action;
  

  switch (type) {
    case actionTypes.ADD_TASK: {
      return [payload, ...state];
    }

    case 'REMOVE': {
      return {
        ...state,
        todos: todos.filter((todo, i) => i !== payload),
      };
    }
  }

  return state;
};


// Redux: Root Reducer
const rootReducer = combineReducers({
  task: taskReducer,
  tasks: taskListReducer,
});

export default rootReducer;
