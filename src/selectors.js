export const getProductsArray = productsById => Object.values(productsById);
export const getActiveProductsArray = productsById => Object.values(productsById).filter(product => product.active);

export const getOrdersArray = ({ order, products }) => {
  return order.map(({ productId, quantity, tempId }) => ({
    ...products.byId[productId],
    quantity,
    tempId
  }));
};
