import { combineReducers } from "redux";
import contactsReducer from "../contacts/store/reducers/contactsReducer";
import entitiesReducer from "../entities/store/reducers/entitiesReducer";
import CDReducer from "../citizenDefense/store/reducers/CDReducer";
import projectsReducer from "../projects/store/reducers/projectsReducer";
import scheduleReducer from "../schedule/store/reducers/scheduleReducer";
import proceduresReducer from "../procedures/store/reducers/proceduresReducer";

const keypadsReducer = combineReducers({
    contact: contactsReducer,
    entities: entitiesReducer,
    citizenDefense: CDReducer,
    projects: projectsReducer,
    schedule: scheduleReducer,
    procedures: proceduresReducer,
});

export default keypadsReducer;
