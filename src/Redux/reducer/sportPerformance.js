import { INIT_HOME_CONTENT, INIT_PERFORMANCE_CONTENT } from '../actionTypes';

const initialState = {
    bannerTitle: '',
    bannerSubtitle: '',
    performanceTitle: '',
    performanceText: '',
    businessText: '',
    eliteAthletesText: '',
    coDevelopmentText: '',
    executiveSupportText: '',
};

export default function (state = initialState, action) {
    switch (action.type) {
        case INIT_HOME_CONTENT : {
            return {
                ...state,
                ...action.content,
            }
        }
        case INIT_PERFORMANCE_CONTENT : {
            return {
                ...state,
                ...action.content,
            }
        }
        default: return state;
    }
}