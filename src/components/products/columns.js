import React from 'react'
import { SpaceAround } from './styled'
import { Name, Count, Price } from '../table'

export default [
  {
    key: 'name',
    title: 'Name',
    dataIndex: 'name',
    sortDirections: ['default', 'asc', 'desc'],
    size: 45,
    // eslint-disable-next-line react/display-name
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
    size: 30,
    // eslint-disable-next-line react/display-name
    render: (item) => <Price price={item.price} />
  },
  {
    key: 'actions',
    title: 'Actions',
    size: 25,
    // eslint-disable-next-line react/display-name
    render: (item, action = { edit: () => {}, delete: () => {} }) => (
      <SpaceAround>
        <button onClick={action.edit(item)}>Edit</button>
        <button onClick={action.delete(item)}>Delete</button>
      </SpaceAround>
    )
  }
]
