import styled from 'styled-components';
import { Button } from './Button';

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
position: relative;
  background-color: #fff;
  width: 600px;
  height: 600px;
`;

const Banner = styled.div`
  height: 200px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
  margin-bottom: 20x;
`;

const ModalName = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  font-family: Pacifico;
  font-size: 30px;
`;

export const ModalItem = ({ openItem, setOpenItem }) => {

  function closeModal(e) {
    if (e.target.id === "overlay") {
      setOpenItem(null);
    }
  }

  if (!openItem) return null;

  return (
    <Overlay
      id="overlay"
      onClick={closeModal}>

      <Modal>

        <Banner img={openItem.img} />

        <ModalName>
          <div>{openItem.name}</div>
          <div>{openItem.price.toLocaleString('ru-RU',
            { style: 'currency', currency: 'RUB' })}</div>
        </ModalName>

        <Button>
          <p>Добавить</p>
        </Button>

      </Modal>
    </Overlay>
  )
};