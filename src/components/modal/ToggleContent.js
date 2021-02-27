import React, { useState } from 'react'
import PropTypes from 'prop-types'

export function ToggleContent ({ toggle, content }) {
  const [isShown, setIsShown] = useState(false)
  const hide = () => setIsShown(false)
  const show = () => setIsShown(true)

  return (
    <>
      {toggle(show)}
      {isShown && content(hide)}
    </>
  )
}

ToggleContent.propTypes = {
  toggle: PropTypes.func.isRequired,
  content: PropTypes.func.isRequired
}
