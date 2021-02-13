import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Input } from './Input'
import SelectCountry from './SelectCountry'
import SelectCity from './SelectCity'
import { Row } from './styled'

const typeList = ['', 'Страна', 'Город']
const [Null, Country, City] = typeList

Delivery.propTypes = {
  deliveryType: PropTypes.string,
  deliveryCountry: PropTypes.string,
  deliveryCities: PropTypes.arrayOf(PropTypes.string)
}

Delivery.defaultProps = {
  deliveryType: Null
  // deliveryCountry: 'США',
  // deliveryCities: ['Саратов', 'Москва', 'Питер']
}

export function Delivery ({ deliveryType, deliveryCountry, deliveryCities }) {
  const [type, setType] = useState(deliveryType)
  const selectHandler = (e) => {
    setType(e.target.value)
  }
  const countryHandler = e => {
    console.log('countryHandler', e.target.value)
  }
  const cityHandler = checked => {
    console.log('cityHandler', checked)
  }
  const isCountry = type === Country
  const isCity = type === City
  return (
    <Input
      label={'Delivery'}
      render={() => (
        <Row>
          <div>
            <select name={'deliveryType'} value={type} onChange={selectHandler}>
              {typeList.map(opt => (
                <option key={`deliveryType-${opt}`}>{opt}</option>
              ))}
            </select>
          </div>
          {isCountry &&
            <SelectCountry
              onChange={countryHandler}
              deliveryCountry={deliveryCountry}
            />
          }
          {isCity &&
            <SelectCity
              onChange={cityHandler}
              deliveryCities={deliveryCities}
            />
          }
        </Row>
      )}
    />
  )
}
