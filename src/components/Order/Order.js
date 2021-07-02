import { useContext } from 'react';

import { Context } from '../functions/context';


import styled from 'styled-components';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { OrderListItem } from './OrderListItem';
import { totalPriceItems, currency } from '../functions/secondaryFunction';

const OrderStyled = styled.section`
display: flex;
flex-direction: column;
position: fixed;
top: 80px;
left: 0;
background: #fff;
min-width: 380px;
height: calc(100% - 80px);
box-shadow: 3px 4px 5px rgba(0,0,0, .25);
padding: 20px;
`;

export const OrderTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;

`;

const OrderContent = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul`

`;

export const Total = styled.div`
  display: flex;
  margin: 0 35px 30px;
    & span:first-child {
      flex-grow: 1;
    }
`;

export const TotalPrice = styled.span`
    text-align: right;
    min-width: 60px;
    margin-left: 20px;
`;

const EmptyList = styled.p`
    text-align: center;
`;

export const Order = () => {

  const {
    orders: { orders, setOrders },
    openItem: { setOpenItem },
    auth: { authentication, logIn },
    orderConfirm: { setOpenOrderConfirm }
  } = useContext(Context);


  const total = orders.reduce((res, order) =>
    totalPriceItems(order) + res, 0)

  const totalCount = orders.reduce((res, order) =>
    order.count + res, 0)


  const deletItem = index => {
    const newOrder = orders.filter((item, i) => index !== i);
    setOrders(newOrder)
  };

  return (
    <OrderStyled>
      <OrderTitle>Ваш закзз</OrderTitle>
      <OrderContent>

        {orders.length ?
          <OrderList>
            {orders.map((order, index) =>
              <OrderListItem
                key={index}
                order={order}
                deletItem={deletItem}
                index={index}
                setOpenItem={setOpenItem}
              />
            )}
          </OrderList> :
          <EmptyList> Список заказов пуст</EmptyList>}

      </OrderContent>
      {orders.length ?
        <>

          <Total>
            <span>Итого</span>
            <span>{totalCount}</span>
            <TotalPrice>{currency(total)} </TotalPrice>
          </Total>
          <ButtonCheckout onClick={() => {
            if (authentication) {
              setOpenOrderConfirm(true)
            } else {
              logIn()
            }
          }}>
            Оформить
          </ButtonCheckout>
        </> :
        null
      }
    </OrderStyled>
  )
}
