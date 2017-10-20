'use strict'
import axios from 'axios'

class Reader {
  constructor (url) {
    this.data = null
    this.url = url
  }

  init () {
    if (typeof this.url !== 'undefined') {
      return {data: 'no url register'}
    }

    axios.get(this.url)
    .then((response) => {
      this.data = response
      console.log('response')
      return this.data
    })
    .catch((error) => {
      return {error: error}
    })
  }
}

export default Reader
