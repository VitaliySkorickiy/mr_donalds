import styled from 'styled-components';

const ChoicesWrap = styled.div` 
  min-width: 500px;
  margin: 0 auto;
  column-count: 2;
  column-gap: 10px;
`;

const ChoicesLabel = styled.label` 
  margin-right: 5px;
    display: block;
`;

const ChoicesRadio = styled.input` 
  cursor: pointer;
  cursor: pointer;

`;

export const Choices = ({ openItem, choice, changeChoices }) => {
  return (
    <>
      <h1>Выбирайте</h1>
      <ChoicesWrap>
        {openItem.choices.map((item, i) => (
          <ChoicesLabel key={i}>
            <ChoicesRadio
              type='radio'
              name="choces"
              checked={choice === item}
              value={item}
              onChange={changeChoices}
            />
            {item}
          </ChoicesLabel>
        ))}
      </ChoicesWrap>
    </>
  )
}