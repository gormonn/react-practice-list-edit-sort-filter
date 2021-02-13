import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Input } from './Input'
import SelectCountry from './SelectCountry'
import SelectCity from './SelectCity'
import { Row, SelectType } from './styled'

const deliveryTypeList = ['', 'Страна', 'Город']
const [Empty, Country, City] = deliveryTypeList

Delivery.propTypes = {
  deliveryType: PropTypes.string,
  deliveryCountry: PropTypes.string,
  deliveryCities: PropTypes.arrayOf(PropTypes.string)
}
console.log(Empty)
Delivery.defaultProps = {
  deliveryType: City // Empty
  // deliveryCountry: undefined,
  // deliveryCities: undefined
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
          <SelectType>
            <select name={'deliveryType'} value={type} onChange={selectHandler}>
              {deliveryTypeList.map(opt => (
                <option key={`deliveryType-${opt}`}>{opt}</option>
              ))}
            </select>
          </SelectType>
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
