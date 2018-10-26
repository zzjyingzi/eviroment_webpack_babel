import { put, take, call, fork } from 'redux-saga/effects';
import { dfActionType } from '../../actions'

export function* watchMaintainTodoListRequestData() {
  while (true) {
    yield take(dfActionType);
  }
}
