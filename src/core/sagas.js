import { all, fork, takeLatest, put} from 'redux-saga/effects';
import { actionTypes, screenNames } from './constants';
import actions from './actions';

import NavigationService from '../services/NavigationService';
import { validate } from '../utilities/validation';

function* screenChange(action) {
  try {
    switch (action.payload.screen) {
      case screenNames.CREATE: {
        yield put(actions.clearTask());
      }
    }
    yield NavigationService.navigate(action.payload.screen);
  }
  catch (error) {
    console.log(error);
  }
}

function* updateTask(action) {
  try {
    yield put(actions.updateField(action.payload));
    yield put(actions.validateField(action.payload.field, validate(action.payload)));
  }
  catch (error) {
    console.log(error);
  }
}

function* saveTask(action) {
  try {
    yield put(actions.addTask(action.payload));
    yield NavigationService.navigate(screenNames.HOME);
  }
  catch (error) {
    console.log(error);
  }
}

export function* watchScreenChange() {
  yield takeLatest(actionTypes.SCREEN_CHANGE, screenChange);
}

export function* watchUpdateTask() {
  yield takeLatest(actionTypes.UPDATE_TASK, updateTask);
}

export function* watchSaveTask() {
  yield takeLatest(actionTypes.SAVE_TASK, saveTask);
}

export function* rootSaga () {
  yield all([
    fork(watchScreenChange),
    fork(watchUpdateTask),
    fork(watchSaveTask),
  ]);
}
