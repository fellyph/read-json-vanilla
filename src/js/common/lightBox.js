import thumb from './thumb'
import price from './price'

class LightBox {
  constructor (car) {
    this.car = car
  }

  getTemplate () {
    const light = document.createElement('div')
    light.className = 'lightbox'
    light.innerHTML = `
      ${thumb(this.car.picture, this.car.name)}
      ${price(this.car.price, this.car.currency)}
    `
    return light
  }
}

export default LightBox
