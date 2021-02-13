import React from 'react'
import { InputText, InputNumber, Delivery } from './input'
import './style.css'

export default function Form () {
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    // TODO: for IE support need polyfill
    const data = Object.fromEntries(formData.entries())
    if (data.deliveryCities) {
      data.deliveryCities = formData.getAll('deliveryCities')
    }
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit}>
      <InputText
        name="name"
        label="Name"
        validate="Required field!"
      />
      <InputText
        name="email"
        label="Supplier Email"
        validate="Incorrect email!"
      />
      <InputNumber
        name="count"
        label="Count"
      />
      <InputNumber
        name="price"
        label="Price"
      />
      <Delivery />
      <input type="submit" value="Add / Update"/>
    </form>
  )
}
