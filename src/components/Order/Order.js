import styled from 'styled-components';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { OrderListItem } from './OrderListItem';
import { totalPriceItems, currency, projection } from '../functions/secondaryFunction';

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

const OrderTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;

`;

const OrderContent = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul`

`;

const Total = styled.div`
  display: flex;
  margin: 0 35px 30px;
    & span:first-child {
      flex-grow: 1;
    }
`;

const TotalPrice = styled.span`
    text-align: right;
    min-width: 60px;
    margin-left: 20px;
`;

const EmptyList = styled.p`
    text-align: center;
`;

const rulesData = {
  name: ['name'],
  price: ['price'],
  count: ['count'],
  topping: ['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name),
    arr => arr.length ? arr : 'no topping'],
  choice: ['choice', item => item ? item : 'no choices'],
}


export const Order = ({ orders, setOrders, setOpenItem, authentication, logIn, firebaseDatabase }) => {

  const dataBase = firebaseDatabase();

  const sendOrder = () => {
    const newOrder = orders.map(projection(rulesData));
    dataBase.ref('orders').push().set({
      nameClient: authentication.displayName,
      email: authentication.email,
      order: newOrder
    });
    setOrders([])
  }

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
      <Total>
        <span>Итого</span>
        <span>{totalCount}</span>
        <TotalPrice>{currency(total)} </TotalPrice>
      </Total>
      <ButtonCheckout onClick={() => {
        if (authentication) {
          sendOrder()
        } else {
          logIn()
        }
      }}
      >Оформить</ButtonCheckout>
    </OrderStyled>
  )
}
