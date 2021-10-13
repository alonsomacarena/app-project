import { fetchAddress, insertAddress } from '../../db'

export const ADD_PLACE = 'ADD_PLACE'
export const LOAD_PLACES = 'LOAD_PLACES'


export const addPlace = (title) => {
    return async dispatch => {

        try {     

            const result = await insertAddress(
                title,  
               )
            
                console.log(result)
            dispatch({ type: ADD_PLACE, payload: {
                    id: result.insertId, 
                    title, 
                    }})
        } catch (err) {
            console.log(err.message)
            throw err
        }   
    }
}

export const loadAddres = () => {
    return async dispatch => {
        try {
            const result = await fetchAddress()
            dispatch({ type: LOAD_PLACES, places: result.rows._array})
        } catch (error) {
            throw error
        }
    }
}