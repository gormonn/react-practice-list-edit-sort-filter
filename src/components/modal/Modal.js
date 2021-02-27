import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { ToggleContent } from './ToggleContent'
// import { Modal } from './Modal2'
import { Outside, Wrapper, Content, CloseButtonWrapper } from './styled'

export default function Modal (props) {
  return (
    <ToggleContent
      toggle={show => props.button(show)}
      content={hide => {
        return ReactDOM.createPortal(
          <Wrapper>
            <Content>
              <CloseButtonWrapper>
                <button onClick={hide}>X</button>
              </CloseButtonWrapper>
              {props.children}
            </Content>
            <Outside onClick={hide} />
          </Wrapper>,
          document.getElementById('modal-root')
        )
      }}
    />
  )
}

Modal.propTypes = {
  button: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
}
