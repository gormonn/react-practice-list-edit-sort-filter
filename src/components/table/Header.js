import React from 'react'
import { Cell, Text } from './styled'

const HeaderDefault = styled(Cell)`
  user-select: none;
`
const HeaderClickable = styled(HeaderDefault)`
  cursor: pointer;
`

export default function Header(props){
    const {sortDirections, sortDirection, state, headerKey, title, size, onClick} = props;
    if (sortDirections && state.sort) {
        const { sortByKey } = state.sort
        const isMatchSort = key === sortByKey
        const sortTitle = isMatchSort
            ? state.sortTitle[sortDirection]
            : state.sortTitle.default
        return (
        <HeaderClickable
            key={headerKey}
            onClick={onClick}
            size={size}
        >
            <Text>{title}</Text>
            <Text>{sortTitle}</Text>
        </HeaderClickable>
        )
    }
    return (
        <HeaderDefault key={headerKey} size={size}>
            <Text>{title}</Text>
        </HeaderDefault>
    )
}