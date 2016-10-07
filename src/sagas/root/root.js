import { fork } from 'redux-saga/effects'
import api from 'sagas/api'
import throwError from 'sagas/throw-error'
import errorHandler from 'sagas/error-handler'

export default function* root() {
  yield [
    fork(api),
    fork(throwError),
    fork(errorHandler),
  ]
}
