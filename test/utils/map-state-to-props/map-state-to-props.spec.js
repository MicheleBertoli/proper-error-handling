import assert from 'assert'
import sinon from 'sinon'
import safeMapStateToProps from 'utils/map-state-to-props'

describe('safeMapStateToProps', () => {
  let errorHandler

  beforeEach(() => {
    errorHandler = sinon.spy()
  })

  it('catches the error', () => {
    const error = new Error('test')
    const func = () => { throw error }
    const state = { state: 'state' }
    const ownProps = { ownProps: 'ownProps' }
    const mapStateToProps = safeMapStateToProps(func, errorHandler)
    mapStateToProps(state, ownProps)

    assert.deepEqual(errorHandler.args[0][0], error)
    assert.deepEqual(errorHandler.args[0][1], { state, ownProps })
  })
})
