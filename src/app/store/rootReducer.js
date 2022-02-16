import { combineReducers } from "redux";
import keypadsReducer from "../main/linksKeypads/store/linksKeypadReducer";

const rootReducer = combineReducers({
    keypadsReducer: keypadsReducer,
});

export default rootReducer;
