import {
    FLATS_LOADED,
    FLAT_DETAIL,
    FLAT_DELETED,
    FLAT_SAVED,
    FLAT_UPDATED,
    FLATS_NONACTIVE_LOADED
} from '../constants/appConstaints';

export const flatsLoaded = (flats) => {
    return {
        type: FLATS_LOADED,
        payload: {
            flats
        }
    };
};

export const flatDetailLoaded = (flatDetail) => {
    return {
        type: FLAT_DETAIL,
        payload: {
            flatDetail
        }
    };
};

export const flatDeleted = (id) => {
    return {
        type: FLAT_DELETED,
        payload: {
            id
        }
    };
};

export const flatSaved = (flatDetail) => {
    console.log(flatDetail);
    return {
        type: FLAT_SAVED,
        payload: {
            flatDetail
        }
    };
};

export const flatUpdated = (flatDetail) => {
    return {
        type: FLAT_UPDATED,
        payload: {
            flatDetail
        }
    };
};

export const flatsNonactiveLoaded = (flatsNonactive) => {
    return {
        type: FLATS_NONACTIVE_LOADED,
        payload: {
            flatsNonactive
        }
    };
};
