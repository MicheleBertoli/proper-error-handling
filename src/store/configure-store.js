import 'babel-polyfill'
import { createStore, applyMiddleware } from 'redux'
import reduxCatch from 'redux-catch'
import createSagaMiddleware from 'redux-saga'
import createLogger from 'redux-logger'
import rootReducer from 'reducers/root'
import rootSaga from 'sagas/root'
import Logger from 'utils/logger'

const errorHandler = (error, getState) => Logger.error(error, getState())

const sagaMiddleware = createSagaMiddleware()

export default () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(
      reduxCatch(errorHandler),
      sagaMiddleware,
      createLogger({ collapsed: true })
    )
  )

  sagaMiddleware.run(rootSaga)

  return store
}
