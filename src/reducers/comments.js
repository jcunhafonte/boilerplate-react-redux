import {ADD_COMMENT} from '../constants/ActionTypes';

import commentsData from '../data/comments';

const initialState = commentsData;

export default function comments(state = initialState, action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [
                action.comment, ...state];
        default:
            return state;
    }
}
