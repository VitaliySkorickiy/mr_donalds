import styled from 'styled-components';

import { totalPriceItems, currency } from '../functions/secondaryFunction';
import trashImage from '../../image/trash.svg';

const OrderItemStyled = styled.li`
  display: flex;
  margin: 15px 0;
`;

const TrashButton = styled.button`
  width: 24px;
  height: 24px;
  border-color: transparent;
  background-color: transparent;
  background-image: url(${trashImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const ItemName = styled.span`
  flex-grow: 1;

`;

const ItemPrice = styled.span`
  margin-left: 20px;
  mask-repeat: 10px;
  min-width: 65px;
  text-align: right;
`;

export const OrderListItem = ({ order }) => (
  <OrderItemStyled >
    <ItemName>{order.name}</ItemName>
    <span>{order.count}</span>
    <ItemPrice >
      {currency(totalPriceItems(order))}
    </ItemPrice>
    <TrashButton />
  </OrderItemStyled>
);