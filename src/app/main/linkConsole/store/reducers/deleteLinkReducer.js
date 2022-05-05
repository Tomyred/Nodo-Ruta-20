const initState = {
    deleted: false,
    deleting: false,
    deletingError: false,
};

export default function deleteLinkReducer(state = initState, action) {
    switch (action.type) {
        case "CONSOLE_LINK_DELETE_INIT":
            return {
                ...state,
                deleted: false,
                deleting: true,
                deletingError: false,
            };
        case "CONSOLE_LINK_DELETE_SUCCEED":
            return {
                ...state,
                deleted: true,
                deleting: false,
                deletingError: false,
            };
        case "CONSOLE_LINK_DELETE_FAILED":
            return {
                ...state,
                deleted: false,
                deleting: false,
                deletingError: true,
            };
        default:
            return state;
    }
}
