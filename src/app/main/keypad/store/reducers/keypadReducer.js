import { act } from "react-dom/cjs/react-dom-test-utils.production.min";

const initState = {
    data: [],
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "value":
            break;

        default:
            return state;
    }
};

export default reducer;
