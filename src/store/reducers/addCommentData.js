import {ADD_COMMENT_DATA} from "../../constants/action.types";

const initialState = [];

const addCommentData = (state = initialState, action) => {
    switch(action.type) {
        case ADD_COMMENT_DATA: {
            return {
                ...state
            }
        }
        default:
            return state;
    }
};

export default addCommentData;