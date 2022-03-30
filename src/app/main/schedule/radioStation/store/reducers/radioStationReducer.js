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
    deleted: false,
    deletingError: false,
    deletingStation: false,
    stationDeleted: false,
    deletingStationError: false,
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
                saved: false,
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
        case "ADD_RADIO_STATION_INIT":
            return {
                ...state,
                saving: true,
            };
        case "ADD_RADIO_STATION_SUCCEED":
            return {
                ...state,
                loaded: false,
                saving: false,
                saved: true,
                namesLoaded: false,
            };
        case "ADD_RADIO_STATION_FAILED":
            return {
                ...state,
                loaded: false,
                saving: false,
                savingError: true,
            };
        case "DELETE_BROADCAST_INIT":
            return {
                ...state,
                deleted: false,
                deletingError: false,
            };
        case "DELETE_BROADCAST_SUCCEED":
            return {
                ...state,
                deleted: true,
                deletingError: false,
            };
        case "DELETE_BROADCAST_FAILED":
            return {
                ...state,
                deletingError: true,
            };
        case "DELETE_RADIO_STATION_INIT":
            return {
                ...state,
                deletingStation: true,
                stationDeleted: false,
                deletingStationError: false,
            };
        case "DELETE_RADIO_STATION_SUCCEED":
            return {
                ...state,
                deletingStation: false,
                stationDeleted: true,
                deletingStationError: false,
                namesLoaded: false,
                loaded: false,
                entity: null,
            };
        case "DELETE_RADIO_STATION_FAILED":
            return {
                ...state,
                deletingStation: false,
                deletingStationError: true,
            };
        default:
            return state;
    }
}
