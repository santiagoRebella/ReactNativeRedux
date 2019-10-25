export const actionTypes = {
  SCREEN_CHANGE: 'SCREEN_CHANGE',
  UPDATE_TASK: 'UPDATE_TASK',
  UPDATE_FIELD: 'UPDATE_FIELD',
  VALIDATE_FIELD: 'VALIDATE_FIELD',
  CLEAR_TASK: 'CLEAR_TASK',
  SAVE_TASK: 'SAVE_TASK',
  ADD_TASK: 'ADD_TASK',
  ADD: 'ADD',
  REMOVE: 'REMOVE',
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
};

export const regex = {
  LETTERS_SPACES: new RegExp('^[a-zA-Z ]+$'),
  LETTERS_NUMBERS_SPACES: new RegExp('^[A-Za-z0-9.,: ]{0,150}$'),
};
