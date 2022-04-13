import { combineReducers } from "redux";
import radioStationReducer from "../radioStation/store/reducers/radioStationReducer";
import classroomReducer from "../classroom/store/reducers/classroomReducer";
import v_classroomReducer from "../virtualClassroom/store/reducers/virtualClassroomReducer";

const scheduleReducer = combineReducers({
    radioStation: radioStationReducer,
    classroom: classroomReducer,
    v_classroom: v_classroomReducer,
});

export default scheduleReducer;
