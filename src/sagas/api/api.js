import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import * as ApiActions from 'actions/api'
import httpbin from 'utils/httpbin'
import { API_GET } from 'constants/action-types'

export function* httpbinGet({ options }) {
  const { response, error } = yield call(httpbin.get, options)
  if (response) {
    yield put(ApiActions.getSuccess())
  } else {
    yield put(ApiActions.getFailure(error))
  }
}

function* takeEveryApiGet() {
  yield* takeEvery(API_GET, httpbinGet)
}

export default takeEveryApiGet
