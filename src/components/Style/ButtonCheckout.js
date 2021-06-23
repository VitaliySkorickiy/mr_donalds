import styled from 'styled-components';


export const ButtonCheckout = styled.button`

  width: 250px;
  height: 65px;
  display: block;

  margin: 0 auto;

  background-color: #299B01;
  font-family: Roboto;
  font-size: 21px;
  line-height: 25px;
  color: #FFFFFF;
  border-color: transparent;
  transition-property: color, background-color, border-color;
  transition-duration: .3s;

  &:hover{
    border-color: #299B01;
    background-color: #fff;
    color: #299B01;
  }

  &:disabled {
    color:#bbb;
    background-color: #ccc;
    border-color: #299B01;
  }
`;