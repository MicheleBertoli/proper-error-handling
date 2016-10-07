import StackTrace from 'stacktrace-js'

const log = stack => {
  console.log(stack.map(frame => frame.toString()).join('\n'))
  console.groupEnd()
}

export default {

  error(error, extra) {
    if (console.group) {
      console.group('💀')
      console.log(error)
      console.log(extra)

      StackTrace.fromError(error).then(log)
    }
  },

  info(message, extra) {
    if (console.group) {
      console.group('ℹ️')
      console.log(message)
      console.log(extra)
      console.groupEnd()
    }
  },

}
