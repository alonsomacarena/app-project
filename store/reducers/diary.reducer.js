import {ADD_DIARY, LOAD_DIARY} from "../actions/diary.actions"

import PhotoEntry from "../../models/PhotoEntry"

const initialState = {
    entrys: []
}

const DiaryReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_DIARY:
            const newPhotoEntry = new PhotoEntry(
                action.payload.id.toString(),
                action.payload.title,
                action.payload.image,
                action.payload.comment
            );
            return {
                ...state,
                entrys: state.entrys.concat(PhotoEntry),
            };
        case LOAD_DIARY:
            return {
                ...state,
                entrys: action.entrys.map(item => new PhotoEntry(
                    item.id,
                    item.title,
                    item.image,
                    item.comment
                ))
            }
        default:
            return state;
    }
}

export default DiaryReducer