/*
Использую генератор моков,
это позволяет безболезненно изменять модель данных.
Например, пока не проработана модель данных "доставки".
*/
import mocker from 'mocker-data-generator'

function randomInteger (min, max) {
  const rand = min + Math.random() * (max + 1 - min)
  return Math.floor(rand)
}

const product = {
  id: {
    faker: 'random.uuid'
  },
  name: {
    faker: 'commerce.productName',
    length: 15
  },
  email: {
    faker: 'internet.email'
  },
  count: {
    faker: 'random.number'
  },
  price: {
    faker: 'finance.amount(100, 1000000, 2)'
  },
  currency: {
    static: 'USD'
  },
  deliveryType: {
    // values: ['', 'Страна', 'Город']
    values: ['Город']
  },
  'object.deliveryType=="Страна",deliveryCountry': {
    values: ['Россия', 'США', 'Япония']
  },
  'object.deliveryType=="Город",deliveryCities': {
    function: function () {
      const values = ['Саратов', 'Москва', 'Питер']
      const size = randomInteger(1, 3)
      return values.slice(0, size)
    }
  }
}

export async function fakeData (count = 5) {
  return mocker()
    .schema('products', product, count)
    .build()
    .then(
      (data) => {
        return new Promise((resolve) => {
          setTimeout(() => resolve(data.products), 1000)
        })
        // return data.products;
      },
      (err) => console.error(err)
    )
}
