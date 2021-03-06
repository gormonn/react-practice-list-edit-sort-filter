import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { BorderedColumn } from './styled'

const deliveryCitiesList = ['Саратов', 'Москва', 'Питер']

SelectCity.propTypes = {
  deliveryCities: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func
}

SelectCity.defaultProps = {
  deliveryCities: deliveryCitiesList
}

export default function SelectCity ({ deliveryCities, onChange }) {
  const [checked, setChecked] = useState(new Set(deliveryCities))

  useEffect(() => {
    const returnChanges = () => {
      onChange(checked)
    }
    returnChanges()
  }, [checked, onChange])

  const citySet = new Set(deliveryCitiesList)
  const isAllchecked = checked.size === citySet.size

  const checkBoxHandler = e => {
    const val = e.target.value
    if (checked.has(val)) {
      checked.delete(val)
    } else {
      checked.add(val)
    }
    setChecked(new Set(checked))
  }

  // const selected = new Set(deliveryCities)
  const toggleSelectAll = () => {
    if (isAllchecked) {
      return setChecked(new Set([]))
    }
    return setChecked(new Set(deliveryCitiesList))
  }
  return (
    <BorderedColumn>
      <label>
        <input
          type="checkbox"
          onChange={toggleSelectAll}
          checked={isAllchecked}
        /> Select All
      </label>
      {deliveryCitiesList.map((opt, i) => (
        <label key={`city-${opt}`}>
          <input
            type='checkbox'
            value={opt}
            name="deliveryCities"
            checked={checked.has(opt)}
            onChange={checkBoxHandler}
          /> {opt}
        </label>
      ))}
    </BorderedColumn>
  )
}
