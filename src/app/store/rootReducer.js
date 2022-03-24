import { combineReducers } from "redux";
import userReducer from "../main/settings/store/userReducer";
import linkConsoleReducer from "../main/linkConsole/store/reducers/linkConsoleReducer";
import scheduleReducer from "../main/schedule/store";

const rootReducer = combineReducers({
    userReducer: userReducer,
    linkConsole: linkConsoleReducer,
    schedule: scheduleReducer,
});

export default rootReducer;
