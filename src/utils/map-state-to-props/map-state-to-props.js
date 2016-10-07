export default (func, errorHandler) => (state, ownProps) => {
  try {
    return func(state, ownProps)
  } catch (error) {
    errorHandler(error, { state, ownProps })
  }

  return {}
}
