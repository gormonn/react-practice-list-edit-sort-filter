import styled from 'styled-components'

export const Wrapper = styled.div`
  display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
  position: fixed;
  // z-index: 100000000; // потомучто окно redux-devtools 99999999)
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  padding: 5% 25%;
`
export const Outside = styled.div`
  z-index: -1;
  content: '';
  opacity: .5;
  background: white;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
`
export const Content = styled.div`
  background: white;
  width: 50%;
  height: 50%;
`
