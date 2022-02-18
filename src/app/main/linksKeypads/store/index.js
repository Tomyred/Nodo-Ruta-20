import { combineReducers } from "redux";
import accessionsReducer from "../accessions/store/reducers/accessionsReducer";
import affiliationsReducer from "../affiliations/store/reducers/affiliationsReducer";
import CDReducer from "../citizenDefense/store/reducers/CDReducer";
import CEReducer from "../citizenEducation/store/reducers/CEReducer";
import contactsReducer from "../contacts/store/reducers/contactsReducer";
import cooperativesReducer from "../cooperatives/store/reducers/cooperativesReducer";
import DACBonusesReducer from "../DACBonuses/store/reducers/DACBonusesReducer";
import entitiesReducer from "../entities/store/reducers/entitiesReducer";
import formalitiesReducer from "../formalities/store/reducers/formalitiesReducer";
import infoServiceReducer from "../infoService/store/reducers/infoServiceReducer";
import jobBankReducer from "../jobBank/store/reducers/jobBankReducer";
import platformsReducer from "../platforms/store/reducers/platformsReducer";
import PEReducer from "../politicEducation/store/reducers/PEReducer";
import projectsReducer from "../projects/store/reducers/projectsReducer";
import scheduleReducer from "../schedule/store/reducers/scheduleReducer";

const keypadsReducer = combineReducers({
    contact: contactsReducer,
    entities: entitiesReducer,
    citizenDefense: CDReducer,
    projects: projectsReducer,
    schedule: scheduleReducer,
    formalities: formalitiesReducer,
    accessions: accessionsReducer,
    affiliations: affiliationsReducer,
    citizenEducation: CEReducer,
    cooperatives: cooperativesReducer,
    DACBonuses: DACBonusesReducer,
    infoService: infoServiceReducer,
    jobBank: jobBankReducer,
    platforms: platformsReducer,
    politicEducation: PEReducer,
});

export default keypadsReducer;
