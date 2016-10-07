import 'babel-polyfill'
import assert from 'assert'
import { call, put } from 'redux-saga/effects'
import * as ApiActions from 'actions/api'
import httpbin from 'utils/httpbin'
import { httpbinGet } from 'sagas/api'

describe('httpbinGet', () => {
  const options = { options: 'options' }

  it('fires the http call', () => {
    const generator = httpbinGet({ options })

    assert.deepEqual(generator.next().value, call(httpbin.get, options))
  })

  it('puts the success action', () => {
    const generator = httpbinGet({ options })

    assert.deepEqual(generator.next().value, call(httpbin.get, options))
    assert.deepEqual(generator.next({ response: 'response' }).value, put(ApiActions.getSuccess()))
  })

  it('puts the fail action', () => {
    const generator = httpbinGet({ options })
    const error = { error: 'error' }

    assert.deepEqual(generator.next().value, call(httpbin.get, options))
    assert.deepEqual(generator.next({ error }).value, put(ApiActions.getFailure(error)))
  })
})
