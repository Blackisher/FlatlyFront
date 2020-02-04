export const commonLoadedAction = (actionType, content) => {
    return {
        type: actionType,
        payload: {
            content
        }
    };
};

export const commonUnloadAction = (actionType) => {
    return {
        type: actionType,
    };
};