import styled from 'styled-components'

export const SpaceAround = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`

export const BottomContols = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 15px;
`

export const FilterWraper = styled.div`
  & > a {
    margin-left: 15px;
  }
`

export const AddButton = styled.button`
  display: flex;
`
