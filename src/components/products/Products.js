import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { PRODUCTS_FETCH_REQUESTED } from './reducer'
import { Table, Name, Count, Price } from '../table'

const columns = [
  {
    key: 'name',
    title: 'Name',
    dataIndex: 'name',
    sortDirections: ['default', 'asc', 'desc'],
    size: 30,
    onFilter: (value, item) => item.name.indexOf(value) === 0,
    render: (item) => (
      <>
        <Name>{item.name}</Name>
        <Count>{item.count}</Count>
      </>
    )
  },
  {
    key: 'price',
    title: 'Price',
    dataIndex: 'price',
    sortDirections: ['default', 'asc', 'desc'],
    size: 20,
    render: (item) => <Price price={item.price} />
  },
  {
    key: 'actions',
    title: 'Actions',
    size: 20,
    render: (item, action = { edit: () => {}, delete: () => {} }) => (
      <>
        <button onClick={action.edit(item)}>Edit</button>
        <button onClick={action.delete(item)}>Delete</button>
      </>
    )
  }
]

function ProductsPage ({ products, dispatch }) {
  const { data, loading, error } = products
  useEffect(() => {
    dispatch({ type: PRODUCTS_FETCH_REQUESTED, payload: { count: 100 } })
  }, [dispatch])
  return (
    <div className="products">
      <Table {...{ data, loading, error, columns }} />
    </div>
  )
}

ProductsPage.propTypes = {
  products: {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.number
      })
    )
  }
}

export default connect((state) => ({
  products: state.products
}))(ProductsPage)
