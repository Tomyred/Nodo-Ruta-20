const initState = {
    data: [],
    loading: false,
    loaded: false,
    loadingError: false,
    saving: false,
    saved: false,
    savingError: false,
    deleted: false,
    deleting: false,
    deletingError: false,
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "SCHEDULE_LINKS_LOAD_INIT":
            return {
                ...state,
                loading: true,
                loaded: false,
                loadingError: false,
            };
        case "SCHEDULE_LINKS_LOAD_SUCCEED":
            return {
                ...state,
                loading: false,
                loaded: true,
                loadingError: false,
                data: action.payload,
            };
        case "SCHEDULE_LINKS_LOAD_FAILED":
            return {
                ...state,
                loading: false,
                loaded: false,
                loadingError: true,
            };
        case "SCHEDULE_LINK_SAVE_INIT":
            return {
                ...state,
                saving: true,
                saved: false,
                savingError: false,
            };
        case "SCHEDULE_LINK_SAVE_SUCCEED":
            return {
                ...state,
                saving: false,
                saved: true,
                savingError: false,
            };
        case "SCHEDULE_LINK_SAVE_FAILED":
            return {
                ...state,
                saving: false,
                saved: false,
                savingError: true,
            };
        case "SCHEDULE_LINK_DELETE_INIT":
            return {
                ...state,
                deleted: false,
                deleting: true,
                deletingError: false,
            };
        case "SCHEDULE_LINK_DELETE_SUCCEED":
            return {
                ...state,
                deleted: true,
                deleting: false,
                deletingError: false,
            };
        case "SCHEDULE_LINK_DELETE_FAILED":
            return {
                ...state,
                deleted: false,
                deleting: false,
                deletingError: true,
            };

        default:
            return state;
    }
};

export default reducer;
