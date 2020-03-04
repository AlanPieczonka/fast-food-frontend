export const getProductsArray = productsById => Object.values(productsById);
export const getOrdersArray = ({ order, products }) => {
    return order.map(({ productId, quantity }) => {
        return {
            ...products.byId[productId],
            quantity
        }
    })
}