

import styled from 'styled-components';
import { ListItem } from './ListItem';
import { Banner } from './Banner';
import { useFetch } from '../Hooks/useFetch';


const MenuStyled = styled.main`
  background-color: #ccc;
  width: 70%;
  margin-top: 80px ;
  margin-left: 380px;
`

const SectionMenu = styled.section`
  padding: 30px;
`
const Loading = styled.div`
  background-image: 'url(../image/loading.jpg)';
  background-size: cover;
  width:300px;
  height:300px;
  background-color:red;
`

export const Menu = () => {


  const res = useFetch();

  const dbMenu = res.response;

  console.log(dbMenu);


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
          <Loading > load</Loading>
      }
    </MenuStyled >
  )
};
