import {
  THROW_ERROR_IN_COMPONENTS,
  THROW_ERROR_IN_REDUCERS,
  THROW_ERROR_IN_SAGAS,
  THROW_ERROR_IN_SELECTORS,
} from 'constants/action-types'

export const inComponents = () => ({ type: THROW_ERROR_IN_COMPONENTS })
export const inActions = () => { throw new Error('Action error') }
export const inReducers = () => ({ type: THROW_ERROR_IN_REDUCERS })
export const inSagas = () => ({ type: THROW_ERROR_IN_SAGAS })
export const inSelectors = () => ({ type: THROW_ERROR_IN_SELECTORS })
