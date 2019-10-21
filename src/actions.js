import {ADD, REMOVE} from './constants';

export default {
  add: item => {
    return {type: ADD, payload: item};
  },
  remove: index => {
    return {type: REMOVE, payload: index};
  },
};
