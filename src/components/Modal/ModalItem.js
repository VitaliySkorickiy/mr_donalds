import styled from 'styled-components';

import { CountItem } from './CountItem';
import { useCount } from '../Hooks/useCount';

import { totalPriceItems, currency } from '../functions/secondaryFunction';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { Toppings } from './Toppings';
import { Choices } from './Choices';
import { useToppings } from '../Hooks/useToppings';
import { useChoices } from '../Hooks/useChoices';

const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0, .5);
  z-index: 20;
`;

const Modal = styled.div`
  background-color: #fff;
  width: 600px;
  height: 600px;
`;

const Banner = styled.div`
  height: 200px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 30px;
  height: calc(100% - 200px);
`;


const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Pacifico, cursive;
  font-size: 30px;
`;

const TotalPriceItem = styled.div` 
 display: flex;
 justify-content: space-between;

`


export const ModalItem = ({ orders, setOrders, openItem, setOpenItem }) => {

  const counter = useCount();
  const toppings = useToppings(openItem);
  const choices = useChoices(openItem);

  const closeModal = (e) => {
    if (e.target.id === "overlay") {
      setOpenItem(null);
    }
  }

  const order = {
    ...openItem,
    count: counter.count,
    topping: toppings.toppings,
    choice: choices.choice,
  };


  const addToOrder = () => {
    setOrders([...orders, order]);
    setOpenItem(null);
  }

  return (
    <Overlay
      id="overlay"
      onClick={closeModal}>

      <Modal>
        <Banner img={openItem.img} />
        <Content>
          <HeaderContent>
            <div>{openItem.name}</div>
            <div>{currency(openItem.price)}</div>
          </HeaderContent>
          <CountItem {...counter} />
          {openItem.toppings && <Toppings {...toppings} />}
          {openItem.choices && <Choices {...choices} openItem={openItem} />}
          <TotalPriceItem>
            <span>Цена:</span>
            <span>{currency(totalPriceItems(order))}</span>
          </TotalPriceItem>
          <ButtonCheckout onClick={addToOrder} disabled={order.choices && !order.choice}>
            <p>Добавить</p>
          </ButtonCheckout>

        </Content>

      </Modal>
    </Overlay>
  )
};