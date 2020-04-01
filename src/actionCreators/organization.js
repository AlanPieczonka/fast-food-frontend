import * as types from "../types";

export const updateOrganization = (changes) => async dispatch => {
    await new Promise(resolve => setTimeout(resolve, 500));

    dispatch({
        type: types.UPDATE_ORGANIZATION,
        payload: { changes }
    })
}