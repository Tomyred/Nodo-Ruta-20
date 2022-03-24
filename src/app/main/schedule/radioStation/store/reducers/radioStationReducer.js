const initState = {
    data: [],
    radioNames: [],
    loading: false,
    loaded: false,
    loadingError: false,
    entity: null,
    namesloading: false,
    namesLoaded: false,
    namesLoadingError: false,
    saving: false,
    saved: false,
    savingError: false,
};

export default function radioReducer(state = initState, action) {
    switch (action.type) {
        case "RADIO_LOAD_INIT":
            return {
                ...state,
                loading: true,
                loaded: false,
                loadingError: false,
                saved: false,
            };
        case "RADIO_LOAD_SUCCEED":
            return {
                ...state,
                data: action.payload,
                loading: false,
                loaded: true,
                loadingError: false,
            };
        case "RADIO_LOAD_FAILED":
            return {
                ...state,
                loading: false,
                loaded: false,
                loadingError: true,
            };
        case "RADIO_NAMES_LOAD_INIT":
            return {
                ...state,
                namesLoading: true,
                namesLoaded: false,
                namesLoadingError: false,
            };
        case "RADIO_NAMES_LOAD_SUCCEED":
            return {
                ...state,
                radioNames: action.payload,
                namesLoading: false,
                namesLoaded: true,
                namesLoadingError: false,
            };
        case "RADIO_NAMES_LOAD_FAILED":
            return {
                ...state,
                namesLoading: false,
                namesLoaded: false,
                namesLoadingError: true,
            };

        case "ENTITY_LOAD_INIT":
            return {
                ...state,
                entity: null,
                loading: true,
                loaded: false,
                loadingError: false,
            };
        case "ENTITY_LOAD_SUCCEED":
            return {
                ...state,
                entity: action.payload,
                loading: false,
                loaded: true,
                loadingError: false,
            };
        case "ENTITY_LOAD_FAILED":
            return {
                ...state,
                entity: null,
                loading: false,
                loaded: false,
                loadingError: true,
            };
        case "ADD_BROADCAST_INIT":
            return {
                ...state,
                saving: true,
                saved: false,
                savingError: false,
            };
        case "ADD_BROADCAST_SUCCEED":
            return {
                ...state,
                loaded: false,
                saving: false,
                saved: true,
                savingError: false,
            };
        case "ADD_BROADCAST_FAILED":
            return {
                ...state,
                saving: false,
                saved: false,
                savingError: true,
            };
        default:
            return state;
    }
}
