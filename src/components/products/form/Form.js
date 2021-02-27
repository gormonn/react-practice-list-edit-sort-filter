import React from 'react'
import PropTypes from 'prop-types'
// import { useSelector } from 'redux'
import { InputText, InputNumber, Delivery } from './input'
import './style.css'

Form.propTypes = {
  record: PropTypes.shape
}

const handleSubmit = (e) => {
  e.preventDefault()
  const formData = new FormData(e.target)
  const data = Object.fromEntries(formData.entries()) // TODO: for IE support need polyfill
  if (data.deliveryCities) {
    data.deliveryCities = formData.getAll('deliveryCities')
  }
  console.log(data)
}

export default function Form ({ record }) {
  // const data = useSelector()
  // console.log('Form', data)
  const {
    id,
    name,
    email,
    count,
    price,
    currency,
    deliveryType,
    deliveryCountry,
    deliveryCities
  } = record
  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="id" value={id} />
      <InputText
        name="name"
        label="Name"
        validate="Required field!"
        value={name}
      />
      <InputText
        name="email"
        label="Supplier Email"
        validate="Incorrect email!"
        value={email}
      />
      <InputNumber
        name="count"
        label="Count"
        value={count}
      />
      <InputNumber
        name="price"
        label="Price"
        value={price}
        currency={currency}
      />
      <Delivery {...{ deliveryType, deliveryCountry, deliveryCities }} />
      <input type="submit" value="Add / Update"/>
    </form>
  )
}
