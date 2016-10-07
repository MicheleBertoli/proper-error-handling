import assert from 'assert'
import sinon from 'sinon'
import safeBindActionCreators from 'utils/bind-action-creators'

describe('safeBindActionCreators', () => {
  const error = new Error('test')
  const dispatch = func => func
  let errorHandler

  beforeEach(() => {
    errorHandler = sinon.spy()
  })

  it('wraps a single function', () => {
    const actionCreators = () => { throw error }
    const boundActionCreators = safeBindActionCreators(actionCreators, dispatch, errorHandler)
    boundActionCreators()

    assert.deepEqual(errorHandler.args[0][0], error)
    assert.deepEqual(errorHandler.args[0][1], { action: 'actionCreators' })
  })

  it('wraps multiples functions', () => {
    const actionCreators = {
      actionCreator: () => { throw error },
    }
    const boundActionCreators = safeBindActionCreators(actionCreators, dispatch, errorHandler)
    boundActionCreators.actionCreator()

    assert.deepEqual(errorHandler.args[0][0], error)
    assert.deepEqual(errorHandler.args[0][1], { action: 'actionCreator' })
  })
})
