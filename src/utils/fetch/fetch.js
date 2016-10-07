import fetch from 'isomorphic-fetch'

export default url => fetch(url)
  .then(response => {
    if (!response.ok) {
      return Promise.reject(response.statusText)
    }

    return { response }
  })
  .catch(error => ({ error }))
