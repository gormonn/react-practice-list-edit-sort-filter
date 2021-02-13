import styled from 'styled-components'

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`
export const BorderedColumn = styled(Column)`
  border: 1px solid back;
  border-radius: 15px;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`
