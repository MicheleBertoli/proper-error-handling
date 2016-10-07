import assert from 'assert'
import {
  THROW_ERROR_IN_COMPONENTS,
  THROW_ERROR_IN_REDUCERS,
  THROW_ERROR_IN_SAGAS,
  THROW_ERROR_IN_SELECTORS,
} from 'constants/action-types'
import * as ThrowErrorActions from 'actions/throw-error'

describe('throw error', () => {
  describe('inComponents', () => {
    it('creates a throw error in components action', () => {
      const expected = {
        type: THROW_ERROR_IN_COMPONENTS,
      }

      assert.deepEqual(ThrowErrorActions.inComponents(), expected)
    })
  })

  describe('inActions', () => {
    it('throws an error', () => {
      assert.throws(() => ThrowErrorActions.inActions(), /Action error/)
    })
  })

  describe('inReducers', () => {
    it('creates a throw error in reducers action', () => {
      const expected = {
        type: THROW_ERROR_IN_REDUCERS,
      }

      assert.deepEqual(ThrowErrorActions.inReducers(), expected)
    })
  })

  describe('inSagas', () => {
    it('creates a throw error in sagas action', () => {
      const expected = {
        type: THROW_ERROR_IN_SAGAS,
      }

      assert.deepEqual(ThrowErrorActions.inSagas(), expected)
    })
  })

  describe('inSelectors', () => {
    it('creates a throw error in selectors action', () => {
      const expected = {
        type: THROW_ERROR_IN_SELECTORS,
      }

      assert.deepEqual(ThrowErrorActions.inSelectors(), expected)
    })
  })
})
