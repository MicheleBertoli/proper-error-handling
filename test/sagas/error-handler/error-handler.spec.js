import 'babel-polyfill'
import assert from 'assert'
import { call } from 'redux-saga/effects'
import * as ApiActions from 'actions/api'
import Logger from 'utils/logger'
import { errorHandler } from 'sagas/error-handler'

describe('errorHandler', () => {
  it('fires the logging', () => {
    const action = ApiActions.getFailure('error')
    const generator = errorHandler(action)

    assert.deepEqual(generator.next().value, call(Logger.info, action.error, action.type))
  })
})
