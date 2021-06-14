import styled from 'styled-components';
import logoImg from '../image/logo.svg'

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #299B01;
  color: white;

`;

const Logo = styled.div`
    display: flex;
    align-items: center;
`;

const H1 = styled.h1`
    font-sise: 24px;
    margin-left: 15px;
`;

const ImgLogo = styled.img`
    width: 50px;
`;

const LoginBtn = styled.button`
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 18px;

    :hover {
      background-color: green;
      color: white;
  }
`;


export const NavBar = () => (

  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt='logo' />
      <H1>MrDonald's</H1>
    </Logo>
    <LoginBtn>Войти</LoginBtn>
  </NavBarStyled>
);