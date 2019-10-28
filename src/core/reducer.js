import { combineReducers } from 'redux';
import { actionTypes, fields } from './constants';

const initialTaskState = {
  id: '',
  editMode: false,
  [fields.NAME]: '',
  [fields.DESCRIPTION]: '',
  [fields.PRIORITY]: 0,
  [fields.NAME + '_ERROR']: '',
  [fields.DESCRIPTION + '_ERROR']: '',
  [fields.DIFFICULTY]: '',
  [fields.AVOIDABLE]: false,
  [fields.HOLD]: false,
  [fields.REMOVE]: false,
  [fields.DONE]: false,
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

    case actionTypes.TOGGLE_EDIT_MODE: {
      return {
        ...state,
        editMode: !state.editMode,
      };
    }

    case actionTypes.SELECT_TASK: {
      return {...payload, editMode: false};
    }
  }

  return state;
};

const initialTaskListState = [];

export const taskListReducer = (state = initialTaskListState, action) => {
  const {type, payload} = action;

  switch (type) {

    case actionTypes.ADD_TASK: {
      return [ payload, ...state ];
    }

    case actionTypes.MODIFY_TASK: {
      return state.map(item => item.id === payload.id ? payload : item);
    }

    case actionTypes.REMOVE_TASK: {
      return state.filter(item => item.id !== payload.id);
    }
  }

  return state;
};

const rootReducer = combineReducers({
  task: taskReducer,
  tasks: taskListReducer,
});

export default rootReducer;
