'use strict'
import Car from './car/car'
import CarTemplate from './car/carTemplate'
import axios from 'axios'

class App {
  constructor (target, filterCars) {
    this.target = target
    this.carsData = []
    this.carsTemplate = ''
    this.filterCars = filterCars
    this.sortFilter = 'price'
  }

  init () {
    axios.get('http://www.cartrawler.com/ctabe/cars.json')
    .then((response) => {
      this.cars = response.data[0].VehAvailRSCore.VehVendorAvails.reduce((prev, curr) => {
        return [...prev, ...curr.VehAvails]
      })
      this.cars.map((data) => {
        let car = new Car(data.Vehicle.VehMakeModel['@Name'], data.Vehicle.PictureURL, data['@Status'], data.Vehicle['@FuelType'], data.TotalCharge['@RateTotalAmount'], data.TotalCharge['@CurrencyCode'])
        this.carsData.push(car)
      })
      this.sortBy(this.sortFilter)
      this.filterCars.addEventListener('change', (e) => this.sortBy(e.target.value))
    })
    .catch((error) => {
      return {error: error}
    })
  }

  sortBy (prop) {
    console.log(prop)
    this.carsTemplate = ''
    let orderByPrice = this.carsData
    if (prop === 'name') {
      orderByPrice.sort((a, b) => {
        if (a[prop].toUpperCase() < b[prop].toUpperCase()) return -1
        if (a[prop].toUpperCase() > b[prop].toUpperCase()) return 1
        return 0
      })
    } else {
      orderByPrice.sort((a, b) => (a[prop] - b[prop]))
    }

    orderByPrice.map((car) => {
      console.log(car)
      this.carsTemplate += CarTemplate(car)
    })
    this.target.innerHTML = this.carsTemplate
  }
}

export default App
