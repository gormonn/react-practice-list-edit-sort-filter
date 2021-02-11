import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Table } from '../table'
// import { Modal } from '../modal'
import { BottomContols, AddButton } from './styled'
import { PRODUCTS_FETCH_REQUESTED } from './reducer'
import { useQuery } from './hooks'
import columns from './columns'
import Filter from './Filter'
import './style.css'

function ProductsPage ({ products, dispatch }) {
  const { data, loading, error } = products
  const filterFromQuery = useQuery().get('search') || ''

  useEffect(() => {
    dispatch({
      type: PRODUCTS_FETCH_REQUESTED,
      payload: { count: 100 }
    })
  }, [dispatch])
  return (
    <div className="products">
      <BottomContols>
        <Filter {...{ filterFromQuery }} />
        <AddButton>Add New</AddButton>
      </BottomContols>
      <Table {...{
        data,
        filter: filterFromQuery,
        loading,
        error,
        columns,
        filterBy: 'name'
      }} />
      {/* <Modal/> */}
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
