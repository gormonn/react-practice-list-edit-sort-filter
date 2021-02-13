import React from 'react'
import PropTypes from 'prop-types'
import { BorderedColumn } from './styled'

// const cityList = [
//   'Саратов', 'Москва', 'Питер'
// ]

const countryList = ['Россия', 'США', 'Япония']

SelectCountry.propTypes = {
  deliveryCountry: PropTypes.string
  // onChange: PropTypes.func
}

SelectCountry.defaultProps = {
  deliveryCountry: countryList[1]
}

export default function SelectCountry ({ deliveryCountry }) {
  return (
    <BorderedColumn>
      {countryList.map(opt => (
        <label key={`country-${opt}`}>
          <input
            type='radio'
            value={opt}
            name={'country'}
            selected={opt === deliveryCountry}
          /> {opt}
        </label>
      ))}
    </BorderedColumn>
  )
}
// InputRadio.propTypes = {
//   name: PropTypes.string,
//   label: PropTypes.string,
//   value: PropTypes.string,
//   options: PropTypes.arrayOf(PropTypes.string).isRequired
// }

// const InputCheck = props => (
//   <Input
//     label={props.label}
//     render={() => (
//       <Column>
//         {props.options.map(opt => (
//           <label key={`radio-contry-${opt}`}>
//             <input
//               type='checkbox'
//               value={opt}
//               name={props.name}
//             /> {opt}
//           </label>
//         ))}
//       </Column>
//     )}
//   />
// )

// InputCheck.propTypes = {
//   name: PropTypes.string,
//   label: PropTypes.string,
//   value: PropTypes.string,
//   options: PropTypes.arrayOf(PropTypes.string).isRequired
// }
