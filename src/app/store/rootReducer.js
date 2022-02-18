import { combineReducers } from "redux";
import keypadsReducer from "../main/linksKeypads/store";

const rootReducer = combineReducers({
    keypadsReducer: keypadsReducer,
});

export default rootReducer;
