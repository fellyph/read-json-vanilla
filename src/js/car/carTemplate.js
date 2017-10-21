import carDetails from './carDetails'
import thumb from '../common/thumb'
import price from '../common/price'

const carTemplate = (car) => {
  return `
    <div class="car">
      ${thumb(car.picture, car.name)}
      ${carDetails(car.status, car.fuelType)}
      ${price(car.price, car.currency)}
    </div>`
}

export default carTemplate
