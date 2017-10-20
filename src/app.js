import Reader from './js/reader'

class App {
  constructor () {
    this.cars = null,
    this.reader = new Reader('http://www.cartrawler.com/ctabe/cars.json')
  }

  get cars () {
    this.cars = this.reader.init();
  }
}

export default App
