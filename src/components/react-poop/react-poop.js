import React, { PropTypes } from 'react'
import poop from 'react-poop'

const ReactPoop = ({ componentsShouldThrow }) => (
  <div>ReactPoop{componentsShouldThrow && this.does.not.exist}</div>
)

ReactPoop.propTypes = {
  componentsShouldThrow: PropTypes.bool,
}

export default poop(ReactPoop)
