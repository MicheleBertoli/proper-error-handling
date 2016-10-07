import { takeEvery } from 'redux-saga'
import { call } from 'redux-saga/effects'
import { THROW_ERROR_IN_SAGAS } from 'constants/action-types'
import Logger from 'utils/logger'

function* throwError() {
  try {
    yield call(() => { throw new Error('Saga error') })
  } catch (error) {
    yield call(Logger.error, error, { type: THROW_ERROR_IN_SAGAS })
  }
}

function* takeEveryThrowErrorInSagas() {
  yield* takeEvery(THROW_ERROR_IN_SAGAS, throwError)
}

export default takeEveryThrowErrorInSagas
