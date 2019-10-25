import {fields, regex} from '../core/constants';

export const validate = (payload) => {
  const {data, field} = payload;

  switch (field) {
    case (fields.NAME): {
      if (!data) {
        return 'Name is required';
      } else {
        return regex.LETTERS_SPACES.test(data) ? '' : 'Name can contain only letters and spaces';
      }
    }
    case (fields.DESCRIPTION): {
      if (!data) {
        return '';
      } else {
        return regex.LETTERS_NUMBERS_SPACES.test(data) ? '' : 'Description is alphanumeric including . and 150 max char length';
      }
    }
  }
};
