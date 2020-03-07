import { FETCH_ANSWER, FETCH_ANSWER_SUCCESS } from '../actions';

const initialState = {
    isFetching: false,
    answer: null,
    image: "",
    error: ""
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ANSWER:
            return {
                ...state,
                isFetching: true,
            };
            case FETCH_ANSWER_SUCCESS:
                return {
                    ...state,
                    isFetching: false,
                    answer: action.payload,
                    image: action.payload
                };
        default:
            return state;
    }
};