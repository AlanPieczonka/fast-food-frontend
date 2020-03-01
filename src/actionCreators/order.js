import * as types from "../types";

export const addProduct = payload => ({ type: types.ADD_PRODUCT, payload })
export const removeProduct = payload => ({ type: types.REMOVE_PRODUCT, payload })
export const decreaseProductQuantity = payload => ({ type: types.DECREASE_PRODUCT_QUANTITY, payload })
export const increaseProductQuantity = payload => ({ type: types.INCREASE_PRODUCT_QUANTITY, payload })
export const saveOrder = () => async dispatch => {
    await new Promise(resolve => setTimeout(resolve, 500)) // TODO: Add an actual request

    dispatch({
        type: types.SAVE_ORDER
    })
}