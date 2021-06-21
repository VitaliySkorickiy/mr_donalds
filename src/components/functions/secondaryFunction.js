


export const totalPriceItems = order => order.price * order.count;


export const currency = (number) => {
  return (
    number.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })
  )
}
