import { actionTypes } from './constants';

export default {
  add: item => {
    return {type: actionTypes.ADD, payload: item};
  },
  remove: index => {
    return {type: actionTypes.REMOVE, payload: index};
  },
  changeScreen: (screen, data) => ({type: actionTypes.HANDLE_SCREEN_CHANGE, payload: {screen, data}}),
  updateTask: (field, data) => ({type: actionTypes.HANDLE_UPDATE_TASK, payload: {field, data}}),
  updateField: (payload) => ({type: actionTypes.UPDATE_FIELD, payload}),
  clearTask: () => ({type: actionTypes.CLEAR_TASK}),
  saveChanges: (task) => ({type: actionTypes.HANDLE_SAVE_CHANGES, payload: task}),
  addTask: (task) => ({type: actionTypes.ADD_TASK, payload: task}),
  modifyTask: (task) => ({type: actionTypes.MODIFY_TASK, payload: task}),
  removeTask: (task) => ({type: actionTypes.REMOVE_TASK, payload: task}),
  selectTask: (task) => ({type: actionTypes.SELECT_TASK, payload: task}),
  validateField: (field, errorMsg) => ({type: actionTypes.VALIDATE_FIELD, payload: { field, data: errorMsg }}),
  toggleEditMode: () => ({type: actionTypes.TOGGLE_EDIT_MODE}),
};

