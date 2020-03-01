export const calculateSum = (order) => order.length
? order
    .map(({ price, quantity }) => price * quantity)
    .reduce((x, y) => x + y)
    .toFixed(2)
: 0;