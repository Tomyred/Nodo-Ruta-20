import { combineReducers } from "redux";
import contactReducer from "../contact/store/reducers/contactReducer";
import entitiesReducer from "../entities/store/reducers/entitiesReducer";
const keypadsReducer = combineReducers({
    contact: contactReducer,
    entities: entitiesReducer,
});

export default keypadsReducer;
