import * as types from "../types";

export const addProduct = product => ({ type: types.ADD_PRODUCT, payload: product })
export const removeProduct = index => ({ type: types.REMOVE_PRODUCT, payload: { index } })
export const updateProductQuantity = (index, quantity) => ({ type: types.UPDATE_PRODUCT_QUANTITY, payload: { index, quantity }}) 
export const saveOrder = () => async dispatch => {
    await new Promise(resolve => setTimeout(resolve, 500)) // TODO: Add an actual request

    dispatch({
        type: types.SAVE_ORDER
    })
}