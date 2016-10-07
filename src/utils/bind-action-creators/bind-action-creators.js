import { bindActionCreators as originalBindActionCreators } from 'redux'

const wrap = (func, errorHandler, action) => (
  (...args) => {
    try {
      return func.apply(null, args)
    } catch (error) {
      return errorHandler(error, { action })
    }
  }
)

export default (actionCreators, dispatch, errorHandler) => {
  let boundActionCreators = originalBindActionCreators(actionCreators, dispatch)

  if (typeof boundActionCreators === 'function') {
    boundActionCreators = wrap(boundActionCreators, errorHandler, actionCreators.name)
  } else {
    Object.keys(boundActionCreators).forEach(key => {
      boundActionCreators[key] = wrap(boundActionCreators[key], errorHandler, key)
    })
  }

  return boundActionCreators
}
