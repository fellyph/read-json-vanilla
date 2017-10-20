
class App {
  constructor () {
    this.cars = null
  }

  get cars () {
    return new Promise((resolve, reject) => {
      if (this.cars) {
        return resolve(this.cars)
      }
    })
  }
}

export default App
