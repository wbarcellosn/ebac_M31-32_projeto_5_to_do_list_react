import styled, { createGlobalStyle } from 'styled-components'
import variables from './variables'

const globalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}
`

export const Conteiner = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`
export const Title = styled.h2`
  display: block;
  margin: 40px 0;
  font-size: 18px;
  font-weight: bold;
`
export const Input = styled.input`
  padding: 8px;
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
`
export const Button = styled.button`
  padding: 6px 12px;
  margin-right: 8px;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  border: none;
  cursor: pointer;
  background-color: ${variables.darkblue};
  border-radius: 8px;
`

export const BtnSalvar = styled(Button)`
  background-color: ${variables.green};
`

export default globalStyle
