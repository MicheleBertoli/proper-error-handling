import { takeEvery } from 'redux-saga'
import { call } from 'redux-saga/effects'
import Logger from 'utils/logger'

export function* errorHandler({ error, type }) {
  yield call(Logger.info, error, type)
}

function* takeEveryError() {
  yield* takeEvery(action => action.error, errorHandler)
}

export default takeEveryError
