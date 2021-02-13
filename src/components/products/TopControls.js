import React from 'react'
import PropTypes from 'prop-types'
import { Modal } from '../modal'
// import { Modal, ToggleContent } from '../modal'
import { ControlsRow, AddButton } from './styled'
import Filter from './Filter'
import { Form } from './form'

export default function TopControls ({ filterFromQuery }) {
  return (
    <ControlsRow>
      <Filter {...{ filterFromQuery }} />
      <Modal button={
        (show) => <AddButton onClick={show}>Add New</AddButton>
      }>
        <Form />
      </Modal>
      {/* <ToggleContent
        toggle={show => <AddButton onClick={show}>Add New</AddButton>}
        content={hide => (
          <Modal>
            <button onClick={hide}>Close</button>
            <Form/>
          </Modal>
        )}
      /> */}
    </ControlsRow>
  )
}

TopControls.propTypes = {
  filterFromQuery: PropTypes.string
}
