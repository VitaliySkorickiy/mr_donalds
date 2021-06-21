import styled from 'styled-components';
import logoImg from '../../image/logo.svg'
import siginImg from '../../image/sign.svg'

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100%;
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
    margin-left: 15px;
    font-size: 24px;
`;

const ImgLogo = styled.img`
    width: 50px;
`;

const LoginBtn = styled.button`
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 18px;
    background-color: transparent;
    border-color: transparent;
    color: white;
`;


export const NavBar = () => (

  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt='logo' />
      <H1>MrDonald's</H1>
    </Logo>
    <LoginBtn>
      <img src={siginImg} alt='войти' />
      <p>Войти</p>
    </LoginBtn>
  </NavBarStyled>
);
