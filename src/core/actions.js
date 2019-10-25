import { actionTypes } from './constants';

export default {
  add: item => {
    return {type: actionTypes.ADD, payload: item};
  },
  remove: index => {
    return {type: actionTypes.REMOVE, payload: index};
  },
  changeScreen: (screen, data) => ({type: actionTypes.SCREEN_CHANGE, payload: {screen, data}}),
  updateTask: (field, data) => ({type: actionTypes.UPDATE_TASK, payload: {field, data}}),
  updateField: (payload) => ({type: actionTypes.UPDATE_FIELD, payload}),
  clearTask: () => ({type: actionTypes.CLEAR_TASK}),
  saveTask: (task) => ({type: actionTypes.SAVE_TASK, payload: task}),
  addTask: (task) => ({type: actionTypes.ADD_TASK, payload: task}),
  validateField: (field, errorMsg) => ({type: actionTypes.VALIDATE_FIELD, payload: { field, data: errorMsg }}),
};

