import { combineReducers } from "redux";
import radioStationReducer from "../radioStation/store/reducers/radioStationReducer";

const scheduleReducer = combineReducers({
    radioStation: radioStationReducer,
});

export default scheduleReducer;
