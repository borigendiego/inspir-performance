import { INIT_HOME_CONTENT, INIT_PERFORMANCE_CONTENT } from './actionTypes';

export const initHomeContent = homeContent => {
    return {
        type: INIT_HOME_CONTENT,
        content: homeContent,
    }
};

export const initPerformanceContent = performanceContent => {
    return {
        type: INIT_PERFORMANCE_CONTENT,
        content: performanceContent,
    }
};