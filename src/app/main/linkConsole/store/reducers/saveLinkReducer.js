const initState = {
    entity: null,
    saving: false,
    saved: false,
    savingError: false,
};

export default function saveLinkReducer(state = initState, action) {
    switch (action.type) {
        case "CONSOLE_LINK_SAVE_INIT":
            return {
                ...state,
                saving: true,
                saved: false,
                savingError: false,
            };
        case "CONSOLE_LINK_SAVE_SUCCEED":
            return {
                ...state,
                saving: false,
                saved: true,
                savingError: false,
            };
        case "CONSOLE_LINK_SAVE_FAILED":
            return {
                ...state,
                saving: false,
                saved: false,
                savingError: true,
            };
        case "CONSOLE_SET_ENTITY":
            return {
                ...state,
                entity: action.payload,
            };
        default:
            return state;
    }
}
