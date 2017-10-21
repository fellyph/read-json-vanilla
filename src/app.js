import CarTemplate from './js/car/carTemplate'
import axios from 'axios'

class App {
  constructor (target) {
    this.target = target
    this.carsPrev = null
    this.carsCurr = null
  }

  init () {
    axios.get('http://www.cartrawler.com/ctabe/cars.json')
    .then((response) => {
      this.cars = response.data[0].VehAvailRSCore.VehVendorAvails.reduce((prev, curr) => {
        return [...prev, ...curr.VehAvails]
      })
      this.cars.map((car) => { this.target.innerHTML += CarTemplate(car) })
    })
    .catch((error) => {
      return {error: error}
    })
  }
}

export default App
