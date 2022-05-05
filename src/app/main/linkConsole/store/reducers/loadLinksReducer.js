const initState = {
    data: [],
    loading: false,
    loaded: false,
    loadingError: false,
};

export default function loadLinksReducer(state = initState, action) {
    switch (action.type) {
        case "CONSOLE_LINKS_LOAD_INIT":
            return {
                ...state,
                data: [],
                loading: true,
                loaded: false,
                loadingError: false,
                entity: null,
                deleted: false,
            };
        case "CONSOLE_LINKS_LOAD_SUCCEED":
            return {
                ...state,
                loading: false,
                loaded: true,
                loadingError: false,
                data: action.payload,
            };
        case "CONSOLE_LINKS_LOAD_FAILED":
            return {
                ...state,
                loading: false,
                loaded: false,
                loadingError: true,
                data: [],
            };
        default:
            return state;
    }
}
