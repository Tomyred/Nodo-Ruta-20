import { combineReducers } from "redux";
import userReducer from "../main/settings/store/userReducer";
import linkConsoleReducer from "../main/linkConsole/store/reducers/linkConsoleReducer";

const rootReducer = combineReducers({
    userReducer: userReducer,
    linkConsole: linkConsoleReducer,
});

export default rootReducer;
