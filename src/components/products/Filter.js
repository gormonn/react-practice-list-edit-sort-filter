import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link, useHistory, useLocation } from 'react-router-dom'

const FilterWraper = styled.div`
  display: flex;
`

const filterLink = v => (`?search=${v}`)

export default function Filter ({ filterFromQuery }) {
  const history = useHistory()
  const { pathname } = useLocation()
  const [filter, setFilter] = useState(filterFromQuery)
  const filterChange = e => {
    e.preventDefault()
    setFilter(e.target.value)
  }
  const handleKeyUp = e => {
    if (e.keyCode === 13) {
      const path = e.target.value.length ? filterLink(e.target.value) : pathname
      history.push(path)
    }
  }
  return (
    <FilterWraper>
      <input
        type="text"
        onChange={filterChange}
        onKeyUp={handleKeyUp}
        value={filter}
      />
      <Link to={filterLink(filter)}>
        <button>Искать</button>
      </Link>
    </FilterWraper>
  )
}

Filter.propTypes = {
  filterFromQuery: PropTypes.string
}
