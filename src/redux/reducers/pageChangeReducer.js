import { CHANGE_PAGE } from '../constants/action-Types'
const initialState = {
    ProductPage: true
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_PAGE:
        return {
            ProductPage : action.value
        }
            default:
            return state
        }
    }