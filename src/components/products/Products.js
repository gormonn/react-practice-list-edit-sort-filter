import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Table } from '../table'
import { PRODUCTS_FETCH_REQUESTED } from './reducer'
import { useQuery } from './hooks'
import columns from './columns'
import TopControls from './TopControls'
import './style.css'

function ProductsPage ({ products, dispatch }) {
  const { data, loading, error } = products
  // const [isOpen, openModal] = useState(false)
  const filterFromQuery = useQuery().get('search') || ''

  // const createNew = _ => openModal(true)

  useEffect(() => {
    dispatch({
      type: PRODUCTS_FETCH_REQUESTED,
      payload: { count: 5 }
    })
  }, [dispatch])

  return (
    <div className="products">
      <TopControls />
      <Table {...{
        data,
        filter: filterFromQuery,
        loading,
        error,
        columns,
        filterBy: 'name'
      }} />
    </div>
  )
}

ProductsPage.propTypes = {
  products: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.number
      })
    )
  }),
  dispatch: PropTypes.func
}

export default connect((state) => ({
  products: state.products
}))(ProductsPage)
