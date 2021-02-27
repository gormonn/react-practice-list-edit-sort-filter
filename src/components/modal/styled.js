import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  padding: 5% 25% 0 25%;
`
export const Outside = styled.div`
  z-index: -1;
  content: '';
  opacity: .5;
  background: black;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
`
export const Content = styled.div`
  position: relative;
  background: white;
  width: 50%;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  border-radius: 5px;
  // height: 50%;
  // border: gray 1px solid;
`

export const CloseButtonWrapper = styled.div`
  padding: inherit;
  position: absolute;
  top: 0px;
  right: 0px;
  & button{
    cursor: pointer;
  }
`
