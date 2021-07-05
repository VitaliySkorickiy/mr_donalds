

import styled from 'styled-components';
import { ListItem } from './ListItem';
import { Banner } from './Banner';
import { useFetch } from '../Hooks/useFetch';
import { Spinner } from '../Spinner/Spinner';


const MenuStyled = styled.main`
  background-color: #ccc;
  width: 70%;
  margin-top: 80px ;
  margin-left: 380px;
  position: relative;
  height: 100vh;
`

const SectionMenu = styled.section`
  padding: 30px;
`

export const Menu = () => {


  const res = useFetch();

  const dbMenu = res.response;

  return (
    <MenuStyled>

      <Banner />
      {res.response ?

        <>
          <SectionMenu>
            <h2>Бургеры</h2>
            <ListItem
              itemList={dbMenu.burger}
            />

          </SectionMenu>

          <SectionMenu>
            <h2>Закуски / Напитки</h2>
            <ListItem
              itemList={dbMenu.other}
            />
          </SectionMenu>
        </>
        : res.error ?
          <div > we will fix it soon...</div> :
          <Spinner />
      }
    </MenuStyled >
  )
};
