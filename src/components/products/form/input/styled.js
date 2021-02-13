import styled from 'styled-components'

export const SelectType = styled.div`
  width: 50%;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`
export const BorderedColumn = styled(Column)`
  width: 50%;
  padding: 18px;
  border: black 1px solid;
  // border-radius: 7px;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  // justify-content: space-between;
`
