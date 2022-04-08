import { combineReducers } from "redux";
import radioStationReducer from "../radioStation/store/reducers/radioStationReducer";
import classroomReducer from "../classroom/store/reducers/classroomReducer";

const scheduleReducer = combineReducers({
    radioStation: radioStationReducer,
    classroom: classroomReducer,
});

export default scheduleReducer;
