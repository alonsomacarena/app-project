import { ADD_ROUTINES, LOAD_ROUTINES } from "../actions/routine.action";

import Routine from "../../models/Routine";

const initialState = {
    routine: []
}

const RoutineReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_ROUTINES:
            const newRoutine = new Profile(
                action.payload.id.toString(),
                action.payload.title,
                action.payload.turno,
                action.payload.horario,
                action.payload.step1,
                action.payload.step2,
                action.payload.step3,
                action.payload.step4,
                action.payload.otros
            )
            return {
                ...state,
                routine: state.routine.concat(newRoutine)
            };

            case LOAD_ROUTINES:
                return {
                    ...state,
                    routine: action.routine.map(item => new Routine(
                        item.id,
                        item.title,
                        item.turno,
                        item.horario,
                        item.step1,
                        item.step2,
                        item.step3,
                        item.step4,
                        item.otros,
                    ))
                }

            default:
                return state
    }
}

export default RoutineReducer;