import { API_GET, API_GET_SUCCESS, API_GET_FAILURE } from 'constants/action-types'

const get = options => ({ type: API_GET, options })
export const getSuccess = response => ({ type: API_GET_SUCCESS, response })
export const getFailure = error => ({ type: API_GET_FAILURE, error })

export const getStatus = status => get({ status })
