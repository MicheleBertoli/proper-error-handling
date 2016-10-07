import assert from 'assert'
import {
  THROW_ERROR_IN_COMPONENTS,
  THROW_ERROR_IN_REDUCERS,
  THROW_ERROR_IN_SELECTORS,
} from 'constants/action-types'
import throwError, { getComponentsShouldThrow, getSelectorsShouldThrow } from 'reducers/throw-error'

describe('throw error', () => {
  it('returns the initial state', () => {
    assert.deepEqual(throwError(undefined, {}), {})
  })

  it('handles THROW_ERROR_IN_COMPONENTS', () => {
    const action = {
      type: THROW_ERROR_IN_COMPONENTS,
    }
    const expected = { componentsShouldThrow: true }

    assert.deepEqual(throwError(undefined, action), expected)
  })

  it('throws an error', () => {
    const action = {
      type: THROW_ERROR_IN_REDUCERS,
    }

    assert.throws(() => throwError(undefined, action), /Reducer error/)
  })

  it('handles THROW_ERROR_IN_SELECTORS', () => {
    const action = {
      type: THROW_ERROR_IN_SELECTORS,
    }
    const expected = { selectorsShouldThrow: true }

    assert.deepEqual(throwError(undefined, action), expected)
  })
})

describe('getComponentsShouldThrow', () => {
  it('returns componentsShouldThrow', () => {
    const state = {
      throwError: { componentsShouldThrow: true },
    }

    assert.equal(getComponentsShouldThrow(state), true)
  })
})

describe('getSelectorsShouldThrow', () => {
  it('throws an error', () => {
    const state = {
      throwError: { selectorsShouldThrow: true },
    }

    assert.throws(() => getSelectorsShouldThrow(state), /Selector error/)
  })
})
