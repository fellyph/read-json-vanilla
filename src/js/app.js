import Car from './car/car'
import CarTemplate from './car/carTemplate'
import axios from 'axios'

class App {
  constructor (target) {
    this.target = target
    this.carsData = []
    this.carsTemplate = ''
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
        this.carsTemplate += CarTemplate(car)
      })
      this.target.innerHTML = this.carsTemplate
    })
    .catch((error) => {
      return {error: error}
    })
  }

  sortByPrice () {
    
  }

  sortByName () {
    
  }
}

export default App
