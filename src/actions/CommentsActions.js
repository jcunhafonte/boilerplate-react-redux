import {ADD_COMMENT} from '../constants/ActionTypes';

export function addComment(comment) {
    return {
        type: ADD_COMMENT,
        comment,
    };
}