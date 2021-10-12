import { fetchRoutines, insertRoutine } from "../../db";

export const ADD_ROUTINES = "ADD_ROUTINES";
export const LOAD_ROUTINES = "LOAD_ROUTINES";

export const addRoutine = (title,turno, horario, step1, step2, step3, step4, otros) => {
    return async dispatch => {

        try{
      const result = await insertRoutine(
          title,
          turno,
          horario,
          step1,
          step2,
          step3,
          step4,
          otros,
      )
        console.log(result)
        dispatch({type: ADD_ROUTINES, payload: {id: result.insertId,title, turno, horario, step1, step2, step3, step4, otros}})
      }catch(err) {
            console.log(err.message)
            throw err
        }
    } 
}

export const loadRoutines = () => {
    return async dispatch => {
        try {
            const result = await fetchRoutines();
            console.log(result)
            dispatch({ type: LOAD_ROUTINES, places: result.rows._array })
        } catch (error) {
            throw error;
        }
    }
}