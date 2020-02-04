import {BOOKINGS_LOADED} from "../constants/appConstaints";

export const bookingsLoaded = (bookings) => {
    return {
        type: BOOKINGS_LOADED,
        payload: {
            bookings
        }
    };
};