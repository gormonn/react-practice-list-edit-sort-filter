import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Body, Row, Cell, Text } from './styled'
import { useSorter, useTableReducer } from './hooks'

const Header = styled(Cell)`
  user-select: none;
`
const HeaderClickable = styled(Header)`
  cursor: pointer;
`

export default function Table ({ data, filter, loading, error, columns }) {
  const [state, dispatch] = useTableReducer()

  useEffect(() => {
    const getSortingState = () => {
      const sortingColumns = columns.filter((col) => col.sortDirections)
      sortingColumns.forEach(({ key, dataIndex, sortDirections }) => {
        dispatch({
          type: 'sortInit',
          payload: { key, dataIndex, sortDirections }
        })
      })
    }
    getSortingState()
  }, [columns, dispatch])

  const [sorterFunction, sortDirection] = useSorter(state)

  const sortedData = sorterFunction
    ? data.slice(0).sort(sorterFunction)
    : data

  const filteredData = filter
    ? sortedData.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
    : sortedData

  const rowKey = 'header-row'

  return (
    <Body>
      <Row key={rowKey}>
        {columns.map(({ title, size, key, sortDirections }) => {
          const headerKey = `${rowKey}-${key}`
          if (sortDirections && state.sort) {
            const { sortByKey } = state.sort
            const isMatchSort = key === sortByKey
            const sortTitle = isMatchSort
              ? state.sortTitle[sortDirection]
              : state.sortTitle.default
            return (
              <HeaderClickable
                key={headerKey}
                onClick={() => {
                  dispatch({ type: 'sortToggle', payload: { sortByKey: key } })
                }}
                size={size}
              >
                <Text>{title}</Text>
                <Text>{sortTitle}</Text>
              </HeaderClickable>
            )
          }
          return (
            <Header key={headerKey} size={size}>
              <Text>{title}</Text>
            </Header>
          )
        })}
      </Row>
      <TableBody {...{ data: filteredData, columns }} />
    </Body>
  )
}

function TableBody ({ data, columns }) {
  return data.map((item, i) => {
    const rowKey = `row-${i}`
    return (
      <Row key={rowKey}>
        <Cells {...{ rowKey, item, columns }} />
      </Row>
    )
  })
}

function Cells ({ rowKey, item, columns }) {
  return columns.map((column) => {
    return (
      <Cell key={`${rowKey}-${column.key}`} size={column.size}>
        {column.render ? column.render(item) : item}
      </Cell>
    )
  })
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      dataIndex: PropTypes.string,
      key: PropTypes.string.isRequired,
      sortDirections: PropTypes.arrayOf(PropTypes.string),
      size: PropTypes.number,
      onFilter: PropTypes.func,
      render: PropTypes.func
    })
  ).isRequired
}
