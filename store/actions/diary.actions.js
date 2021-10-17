import * as FileSystem from 'expo-file-system';

import { fetchDiary, insertDiary } from '../../db';

export const ADD_DIARY = 'ADD_DIARY';
export const LOAD_DIARY = 'LOAD_DIARY';

export const addDiary = (title, image,comment) => {
    return async dispatch => {
        const fileName = image.split('/').pop()
        const Path = FileSystem.documentDirectory + fileName;

        try {
            FileSystem.moveAsync({
                from: image,
                to: Path,
            })

            const result = await insertDiary(
                title,
                Path,
                comment,
            );

                console.log(result)

            dispatch({
                type: ADD_DIARY,
                payload: {
                    id: result.insertId,
                    title,
                    image: Path,
                    comment,
                }
            });
        } catch (err) {
            console.log(err.message);
            throw err;
        }

        
    }
}

export const loadDiary = () => {
    return async dispatch => {
        try {
            const result = await fetchDiary();
            console.log(result)
            dispatch({ type: LOAD_DIARY, entrys: result.rows._array })
        } catch (error) {
            throw error;
        }
    }
}