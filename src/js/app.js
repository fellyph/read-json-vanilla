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
    this.descending = true
  }

  init () {
    axios.get('http://www.cartrawler.com/ctabe/cars.json')
    .then((response) => {
      this.cars = response.data[0].VehAvailRSCore.VehVendorAvails.reduce((prev, curr) => {
        return [...prev, ...curr.VehAvails]
      })
      this.cars.map((data) => {
        console.log(data)
        let car = new Car(data.Vehicle.VehMakeModel['@Name'], data.Vehicle.PictureURL, data['@Status'], data.Vehicle['@FuelType'], data.TotalCharge['@RateTotalAmount'], data.TotalCharge['@CurrencyCode'])
        this.carsData.push(car)
      })
      this.sortBy(this.sortFilter)
      this.filterCars.addEventListener('change', this.setSort)
    })
    .catch((error) => {
      return {error: error}
    })
  }

  setSort (e) {
    const type = e.target.value
    this.descending = this.sortFilter === type && !this.descending
    this.sortBy(type) /* fix the sort */
    this.sortFilter = type
  }

  sortBy (prop) {
    this.carsTemplate = ''
    let orderByPrice = this.carsData
    orderByPrice.sort((a, b) => (this.descending ? b[prop] - a[prop] : a[prop] - b[prop]))
      .map((car) => {
        this.carsTemplate += CarTemplate(car)
      })
    this.target.innerHTML = this.carsTemplate
  }
}

export default App
