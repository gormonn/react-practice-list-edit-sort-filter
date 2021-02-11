import React, { useState } from 'react'
import { Outside, Wrapper, Content } from './styled'

export function Modal () {
  const [isOpen, openModal] = useState(true)
  const closeModal = _ => openModal(false)

  return (
    <Wrapper isOpen={isOpen} >
      <Content>
        modalwindow
      </Content>
      <Outside onClick={closeModal} />
    </Wrapper>
  )
}
