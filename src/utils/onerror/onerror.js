import Logger from 'utils/logger'

window.onerror = (message, source, lineno, colno, error) => {
  Logger.error(error, { message, source, lineno, colno })

  return true
}
