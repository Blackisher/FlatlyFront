import {
    FLATS_LOADED,
    FLAT_DETAIL,
    UNLOAD_FLAT_DETAIL,
    FLAT_DELETED,
    FLAT_SAVED,
    FLAT_UPDATED,
    USER_DETAIL_LOADED,
    BOOKINGS_LOADED,
    FLATS_NONACTIVE_LOADED
} from '../constants/appConstaints';

export const initialState = {
    flats: undefined,
    flatsNonactive: undefined,
    flatDetail:  {
        name_of_room: undefined,
        description: undefined,
        start_date: undefined,
        price: undefined,
        limit_of_quests: undefined,
        check_in_from: undefined,
        check_in_to: undefined,
        check_out: undefined,
        country: undefined,
        city: undefined,
        street: undefined,
        number_of_street: undefined,
        zip_code: undefined,
        room_image: undefined,
        payment_methods: undefined
    },
    userDetail: undefined,
    bookings: undefined

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FLATS_LOADED: {
            const { flats } = action.payload;
            return { ...state, flats: flats};
        }
        case FLATS_NONACTIVE_LOADED: {
            const { flatsNonactive } = action.payload;
            return { ...state, flatsNonactive: flatsNonactive};
        }
        case FLAT_DETAIL: {
            const { flatDetail } = action.payload;
            return { ...state, flatDetail: flatDetail};
        }
        case UNLOAD_FLAT_DETAIL: {
            const { flatDetail } = initialState.flatDetail;
            return { ...state, flatDetail: flatDetail};
        }
        case FLAT_DELETED: {
            const { id } = action.payload;
            const index = state.flats.findIndex(item => item.id === id);
            let newFlats = [...state.flats];
            newFlats.splice(index, 1);
            return { ...state, flats: newFlats};
        }
        case FLAT_SAVED: {
            const { flatDetail } = action.payload;
            if (state.flats !== undefined) {
                return { ...state, flats: [...state.flats, flatDetail]};
            } else {
                return state;
            }
        }
        case FLAT_UPDATED: {
            if (state.flats !== undefined) {
                const { flatDetail } = action.payload;
                const index = state.flats.findIndex(item => item.id === flatDetail.id);
                let newFlats = [...state.flats];
                newFlats[index] = flatDetail;
                return { ...state, flats: newFlats};
            } else {
                return state;
            }
        }
        case USER_DETAIL_LOADED: {
            const { userDetail } = action.payload;
            return { ...state, userDetail: userDetail};
        }
        case BOOKINGS_LOADED: {
            const { bookings } = action.payload;
            return { ...state, bookings: bookings};
        }
        default:
            return state
    }
};

export default reducer;