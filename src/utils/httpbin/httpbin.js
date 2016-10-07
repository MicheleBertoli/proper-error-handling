import fetch from 'utils/fetch'

export default {

  get(options) {
    let url = 'https://httpbin.org/'

    if (options && options.status) {
      url += `status/${options.status}`
    }

    return fetch(url)
  },

}
