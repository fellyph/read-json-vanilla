import CurrencyMap from './currencyMap'

const price = (value, currency) => {
  const simbol = new CurrencyMap(currency)
  return `<div class="price">
    <h3>${simbol.getSimbol()} ${value}</h3>
  </div>`
}

export default price
