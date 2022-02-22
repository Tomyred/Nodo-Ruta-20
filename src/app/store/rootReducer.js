import { combineReducers } from "redux";
import keypadsReducer from "../main/linksKeypads/store";
import userReducer from "../main/settings/store/userReducer";

const rootReducer = combineReducers({
    keypadsReducer: keypadsReducer,
    userReducer: userReducer,
});

export default rootReducer;
