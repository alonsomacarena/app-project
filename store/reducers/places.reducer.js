import { ADD_PLACE, LOAD_PLACES } from "../actions/places.actions"

import Place from '../../models/Place'

// models


const initialState = {
    places: []
}

const PlacesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PLACE:
            const newPlace = new Place(
                action.payload.id, 
                action.payload.title, 
                )
            return  { 
                ...state,
                places: state.places.concat(newPlace)
            }
        case LOAD_PLACES:
            return {
                ...state,
                places: action.places.map(item => new Place(
                    item.id,
                    item.title,
                ))
            }
        default:
            return state
    }
}

export default PlacesReducer