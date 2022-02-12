import { combineReducers } from "redux";
import reducer from "../main/keypad/store/reducers/keypadReducer";

const rootReducer = combineReducers({
    keypad: reducer,
});

export default rootReducer;
