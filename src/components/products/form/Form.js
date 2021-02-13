import React from 'react'
import { InputText, InputNumber, Delivery } from './input'

export default function Form () {
  const save = () => {
    console.log()
  }
  return (
    <form>
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
      <button onClick={save}></button>
    </form>
  )
}
