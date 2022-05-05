import { combineReducers } from "redux";
import deleteLinkReducer from "./deleteLinkReducer";
import loadLinksReducer from "./loadLinksReducer";
import saveLinkReducer from "./saveLinkReducer";

const linkConsoleReducer = combineReducers({
    deleteLinkReducer: deleteLinkReducer,
    loadLinksReducer: loadLinksReducer,
    saveLinkReducer: saveLinkReducer,
});

export default linkConsoleReducer;
