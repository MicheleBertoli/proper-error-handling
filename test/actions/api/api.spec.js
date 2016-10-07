import assert from 'assert'
import { API_GET, API_GET_SUCCESS, API_GET_FAILURE } from 'constants/action-types'
import * as ApiActions from 'actions/api'

describe('api', () => {
  describe('getSuccess', () => {
    it('creates a get success action', () => {
      const response = 'response'
      const expected = {
        type: API_GET_SUCCESS,
        response,
      }

      assert.deepEqual(ApiActions.getSuccess(response), expected)
    })
  })

  describe('getFailure', () => {
    it('creates a get fail action', () => {
      const error = 'error'
      const expected = {
        type: API_GET_FAILURE,
        error,
      }

      assert.deepEqual(ApiActions.getFailure(error), expected)
    })
  })

  describe('getStatus', () => {
    it('creates a get status action', () => {
      const status = 'status'
      const expected = {
        type: API_GET,
        options: { status },
      }

      assert.deepEqual(ApiActions.getStatus(status), expected)
    })
  })
})
