import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './ListItem';
import banner from '../image/banner.png'

const MenuStyled = styled.main`
  background-color: #ccc;
  /* margin-top: 80px; */
  width: 70%;
  margin: 80px auto;
`

const SectionMenu = styled.section`
  padding: 30px;
`

const BanerMenu = styled.div`
  background: url(${banner}) no-repeat;
  background-size: 100%;
  height: 210px;
  margin: 0 auto;
`

export const Menu = () => (
  <MenuStyled>

    <BanerMenu />

    <SectionMenu>
      <h2>Бургеры</h2>
      <ListItem itemList={dbMenu.burger} />
    </SectionMenu>

    <SectionMenu>
      <h2>Закуски / Напитки</h2>
      <ListItem itemList={dbMenu.other} />
    </SectionMenu>
  </MenuStyled>
);
