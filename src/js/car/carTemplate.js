'use strict'

import carDetails from './carDetails'
import thumb from '../common/thumb'
import price from '../common/price'

class carTemplate {
  constructor (car, handler) {
    this.car = car
    this.handler = handler
  }

  getTemplate () {
    const template = document.createElement('div')
    template.className = 'car'
    template.innerHTML = `
      ${thumb(this.car.picture, this.car.name)}
      ${carDetails(this.car.status, this.car.fuelType)}
      ${price(this.car.price, this.car.currency)}
    `
    template.addEventListener('click', (e) => {
      this.handler(this.car)
    })
    return template
  }
}

export default carTemplate
