import { useState } from 'react'


export const useChoices = (openItem) => {

  const [choice, setChoices] = useState();

  const changeChoices = (e) => {
    setChoices(e.target.value);
  }

  return { choice, changeChoices };
}