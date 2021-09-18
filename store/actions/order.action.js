import { URL_API } from '../../constants/database'

export const GET_ORDERS = 'GET_ORDERS'
export const REMOVE_ORDER = 'REMOVE_ORDER'

const orderByUserID = (data, userId) => {
    const items = []
    Object.keys(data).forEach(key => items.push({id: key, ...data[key]}))
    return items.filter(item => item.userId === userId)
}

export const getOrders = (userId) => {
    return async dispatch => {
        try {  
            const response = await fetch(`${URL_API}/ordenes.json`, {
                method: 'GET',
                headers: { 
                    'Content-Type': 'application/json'
                }
            })
    
            const result = await response.json()
            const items = orderByUserID(result, userId)
            
            dispatch({ type: GET_ORDERS, payload: items})
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const deleteOrder = (id) => {
    return async dispatch => {
        try {  
            await fetch(`${URL_API}/ordenes/${id}.json`, {
                method: 'DELETE',
                headers: { 
                    'Content-Type': 'application/json'
                }
            })
            dispatch({ type: REMOVE_ORDER, order: id})
        } catch (error) {
            console.log(error.message)
        }
    }
}