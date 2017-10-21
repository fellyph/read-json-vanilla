import carDetails from './carDetails'
import thumb from '../common/thumb'

const carTemplate = (car) => {
  return `
    <div class="car">
      ${thumb(car.picture)}
      ${carDetails(car.name, car.status, car.fuelType)}
    </div>`
}

export default carTemplate
