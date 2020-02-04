import {USER_DETAIL_LOADED} from "../constants/appConstaints";

export const userDetailLoaded = (userDetail) => {
    return {
        type: USER_DETAIL_LOADED,
        payload: {
            userDetail
        }
    };
};
