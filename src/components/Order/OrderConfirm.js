import styled from 'styled-components';
import { Overlay } from '../Modal/ModalItem';
import { OrderTitle, Total, TotalPrice } from './Order';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { totalPriceItems, currency, projection } from '../functions/secondaryFunction';

import { useContext } from 'react';

import { Context } from '../functions/context';


const Modal = styled.div`
  background-color: white;
  width: 600px;
  padding: 30px;
`;

const Text = styled.h3`
  text-align: center;
  margin-bottom: 30px;
`;

const rulesData = {
  name: ['name'],
  price: ['price'],
  count: ['count'],
  topping: ['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name),
    arr => arr.length ? arr : 'no topping'],
  choice: ['choice', item => item ? item : 'no choices'],
}

const sendOrder = (dataBase, orders, authentication) => {
  const newOrder = orders.map(projection(rulesData));
  dataBase.ref('orders').push().set({
    nameClient: authentication.displayName,
    email: authentication.email,
    order: newOrder
  });
}


export const OrderConfirm = () => {

  const {
    auth: { authentication },
    orders: { orders, setOrders },
    orderConfirm: { setOpenOrderConfirm },
    firebaseDatabase,
  } = useContext(Context);

  const dataBase = firebaseDatabase();
  const total = orders.reduce((res, order) =>
    totalPriceItems(order) + res, 0)

  return (
    <Overlay>
      <Modal>
        <OrderTitle>{authentication.displayName}</OrderTitle>
        <Text>Подтвердите заказ</Text>
        <Total>
          <span>Итого</span>
          <TotalPrice>{currency(total)}</TotalPrice>
        </Total>
        <ButtonCheckout
          onClick={() => {
            sendOrder(dataBase, orders, authentication);
            setOrders([]);
            setOpenOrderConfirm(false)
          }}>
          Подтвердить
        </ButtonCheckout>
      </Modal>
    </Overlay >
  )
}
