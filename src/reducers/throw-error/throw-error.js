import {
  THROW_ERROR_IN_COMPONENTS,
  THROW_ERROR_IN_REDUCERS,
  THROW_ERROR_IN_SELECTORS,
} from 'constants/action-types'

export default (state = {}, action) => {
  switch (action.type) {
    case THROW_ERROR_IN_COMPONENTS:
      return { componentsShouldThrow: true }

    case THROW_ERROR_IN_REDUCERS:
      throw new Error('Reducer error')

    case THROW_ERROR_IN_SELECTORS:
      return { selectorsShouldThrow: true }

    default:
      return state
  }
}

export const getComponentsShouldThrow = state => state.throwError.componentsShouldThrow

export const getSelectorsShouldThrow = state => {
  if (state.throwError.selectorsShouldThrow) {
    throw new Error('Selector error')
  }
}
