import { all, fork, takeLatest, put, select} from 'redux-saga/effects';
import { actionTypes, screenNames, fields } from './constants';
import actions from './actions';

import NavigationService from '../services/NavigationService';
import { validate } from '../utilities/validation';

function* screenChange(action) {
  try {
    switch (action.payload.screen) {
      case screenNames.CREATE: {
        yield put(actions.clearTask());
        break;
      }
      case screenNames.DETAILS: {
        const tasks = yield select(state => state.tasks);
        const task = tasks.filter(item => item.id === action.payload.data.id)[0];
        yield put(actions.selectTask(task));
        break;
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

function* saveChanges(action) {
  try {
    const task = action.payload;

    if (task[fields.REMOVE]) {
      yield put(actions.removeTask(action.payload));
    }
    else if (task.id) {
      yield put(actions.modifyTask(action.payload));
    } else {
      const id = `${new Date().getTime()}`;
      yield put(actions.addTask({...action.payload, id}));
    }

    yield NavigationService.navigate(screenNames.HOME);
  }
  catch (error) {
    console.log(error);
  }
}

export function* watchScreenChange() {
  yield takeLatest(actionTypes.HANDLE_SCREEN_CHANGE, screenChange);
}

export function* watchUpdateTask() {
  yield takeLatest(actionTypes.HANDLE_UPDATE_TASK, updateTask);
}

export function* watchSaveChanges() {
  yield takeLatest(actionTypes.HANDLE_SAVE_CHANGES, saveChanges);
}

export function* rootSaga () {
  yield all([
    fork(watchScreenChange),
    fork(watchUpdateTask),
    fork(watchSaveChanges),
  ]);
}
