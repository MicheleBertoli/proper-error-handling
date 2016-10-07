import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import * as ThrowErrorActions from 'actions/throw-error'
import { getComponentsShouldThrow, getSelectorsShouldThrow } from 'reducers/throw-error'
import * as ApiActions from 'actions/api'
import ReactComponentErrors from 'components/react-component-errors'
import ReactPoop from 'components/react-poop'
import Logger from 'utils/logger'
import safeBindActionCreators from 'utils/bind-action-creators'
import safeMapStateToProps from 'utils/map-state-to-props'

export const App = props => (
  <div>
    <ReactComponentErrors componentsShouldThrow={props.componentsShouldThrow} />
    <ReactPoop componentsShouldThrow={props.componentsShouldThrow} />
    <div>
      <button onClick={props.throwErrorActions.inComponents}>Throw in components</button>
      <button onClick={props.throwErrorActions.inActions}>Throw in actions</button>
      <button onClick={props.throwErrorActions.inReducers}>Throw in reducers</button>
      <button onClick={props.throwErrorActions.inSagas}>Throw in sagas</button>
      <button onClick={props.throwErrorActions.inSelectors}>Throw in selectors</button>
    </div>
    <div>
      <button onClick={() => props.apiActions.getStatus(404)}>Get 404</button>
      <button onClick={() => props.apiActions.getStatus(500)}>Get 500</button>
    </div>
  </div>
)

App.propTypes = {
  apiActions: PropTypes.object,
  componentsShouldThrow: PropTypes.bool,
  throwErrorActions: PropTypes.object,
}

const mapStateToProps = safeMapStateToProps(state => ({
  componentsShouldThrow: getComponentsShouldThrow(state),
  selectorsShouldThrow: getSelectorsShouldThrow(state),
}), Logger.error)

const mapDispatchToProps = dispatch => ({
  apiActions: safeBindActionCreators(ApiActions, dispatch, Logger.error),
  throwErrorActions: safeBindActionCreators(ThrowErrorActions, dispatch, Logger.error),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
