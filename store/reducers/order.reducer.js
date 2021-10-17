import { GET_ORDERS, REMOVE_ORDER } from '../actions/order.action'

const initialState = {
    items: [],
    selected: null
}

const OrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDERS:
            return {
                ...state,
                items: action.payload
            }
        case REMOVE_ORDER:
            console.log('REMOVE', action)
            const updateItems = [...state.items].filter(item => item.id !== action.order)
            return {
                ...state,
                items: updateItems,
                selected: null
            }
        default:
            return state
    }
}

export default OrderReducer