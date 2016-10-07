import React, { Component, PropTypes } from 'react'
import wrapReactLifecycleMethodsWithTryCatch, { config } from 'react-component-errors'
import Logger from 'utils/logger'

config.errorHandler = errorReport => Logger.error(errorReport.error, errorReport)

class ReactComponentErrors extends Component {

  componentWillReceiveProps(nextProps) {
    this.throwError(nextProps)
  }

  throwError(props) {
    if (props.componentsShouldThrow) {
      throw new Error('Component error')
    }
  }

  render() {
    return <div>ReactComponentErrors</div>
  }

}

ReactComponentErrors.propTypes = {
  componentsShouldThrow: PropTypes.bool,
}

wrapReactLifecycleMethodsWithTryCatch(ReactComponentErrors)

export default ReactComponentErrors
