import React from 'react'
import PropTypes from 'prop-types'
import { BorderedColumn } from './styled'

const deliveryCountryList = ['Россия', 'США', 'Япония']

SelectCountry.propTypes = {
  deliveryCountry: PropTypes.string
  // onChange: PropTypes.func
}

SelectCountry.defaultProps = {
  deliveryCountry: deliveryCountryList[1]
}

export default function SelectCountry ({ deliveryCountry }) {
  return (
    <BorderedColumn>
      {deliveryCountryList.map(opt => (
        <label key={`country-${opt}`}>
          <input
            type='radio'
            value={opt}
            name={'deliveryCountry'}
            checked={opt === deliveryCountry}
          /> {opt}
        </label>
      ))}
    </BorderedColumn>
  )
}
