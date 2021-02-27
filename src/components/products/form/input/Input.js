import React from 'react'
import PropTypes from 'prop-types'
import { Column } from './styled'

export const Input = props => {
  const { type, name, label, value, validate } = props
  return (
    <Column>
      {label ? (<label>{label}:</label>) : null}
      {props.render
        ? props.render()
        : (
          <div>
            <input type={type} name={name} value={value}></input>
            <span>{validate}</span>
          </div>
          )
      }
    </Column>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  validate: PropTypes.string,
  render: PropTypes.func
}

export const InputText = props => (
  <Input {...{ type: 'text', ...props }} />
)

export const InputNumber = props => (
  <Input {...{ type: 'number', ...props }} />
)
