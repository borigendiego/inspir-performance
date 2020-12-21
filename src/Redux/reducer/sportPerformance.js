import { GET_ELITE_TEXT } from "../actionTypes";

const initialState = {
    eliteText: '',
    performanceText: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ELITE_TEXT : {
            return {
                ...state,
                eliteText: 'Gomi'
            }
        }
        default: return state;
    }
}