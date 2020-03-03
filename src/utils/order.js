import sumBy from 'lodash.sumby'

export const calculateSum = order => {
    if (!order.length) {
        return 0
    }

    return sumBy(order, ({ price, quantity }) => price * quantity).toFixed(2)
}