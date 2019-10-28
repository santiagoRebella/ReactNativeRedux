export const actionTypes = {
  UPDATE_FIELD: 'UPDATE_FIELD',
  VALIDATE_FIELD: 'VALIDATE_FIELD',
  CLEAR_TASK: 'CLEAR_TASK',
  ADD_TASK: 'ADD_TASK',
  MODIFY_TASK: 'MODIFY_TASK',
  SELECT_TASK: 'SELECT_TASK',
  REMOVE_TASK: 'REMOVE_TASK',
  TOGGLE_EDIT_MODE: 'TOGGLE_EDIT_MODE',
  HANDLE_SCREEN_CHANGE: 'HANDLE_SCREEN_CHANGE',
  HANDLE_SAVE_CHANGES: 'HANDLE_SAVE_CHANGES',
  HANDLE_UPDATE_TASK: 'HANDLE_UPDATE_TASK',
};

export const screenNames = {
  HOME: 'HOME',
  CREATE: 'CREATE',
  DETAILS: 'DETAILS',
  EDIT: 'EDIT',
};

export const fields = {
  NAME: 'NAME',
  DESCRIPTION: 'DESCRIPTION',
  PRIORITY: 'PRIORITY',
  DIFFICULTY: 'DIFFICULTY',
  AVOIDABLE: 'AVOIDABLE',
  HOLD: 'HOLD',
  REMOVE: 'REMOVE',
  DONE: 'DONE',
};

export const regex = {
  LETTERS_SPACES: new RegExp('^[a-zA-Z ]+$'),
  LETTERS_NUMBERS_SPACES: new RegExp('^[A-Za-z0-9.,: ]{0,150}$'),
};
