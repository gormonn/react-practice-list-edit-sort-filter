import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Outside, Wrapper, Content } from './styled'

export function Modal ({ open }) {
  const [isOpen, openModal] = useState(false)
  const closeModal = _ => openModal(false)

  useEffect(() => {
    if (open) {
      openModal(true)
    }
  }, [open])

  return (
    <Wrapper isOpen={isOpen} >
      <Content>
        modalwindow
      </Content>
      <Outside onClick={closeModal} />
    </Wrapper>
  )
}

Modal.propTypes = {
  open: PropTypes.bool
}
