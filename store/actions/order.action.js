import { URL_API } from '../../constants/database'

export const GET_ORDERS = 'GET_ORDERS'
export const REMOVE_ORDER = 'REMOVE_ORDER'

const orderByUserID = (data, userId) => {
    const items = []
    Object.keys(data).forEach(key => items.push({id: key, ...data[key]}))
    return items.filter(item => item.userId === userId)
}

/*const orderByProductID = (data, itemsId) => {
    const items = []
    Object.keys(data).forEach(key => items.push({id: key, ...data[key]}))
    return items.filter(item => item.itemsId === itemsId)
}*/

export const getOrders = (userId) => {
    return async dispatch => {
        try {  
            const response = await fetch(`${URL_API}/favorites.json`, {
                method: 'GET',
                headers: { 
                    'Content-Type': 'application/json'
                }
            })
    
            const result = await response.json()
           // const items = orderByUserID(result, userId)
            const items = orderByUserID(result, userId)
            console.log("console de items",items)
            dispatch({ type: GET_ORDERS, payload: items})
        } catch (error) {
            console.log("es este el que dice ",error.message)
        }
    }
}

export const deleteOrder = (id) => {
    return async dispatch => {
        try {  
            await fetch(`${URL_API}/favorites/${id}.json`, {
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