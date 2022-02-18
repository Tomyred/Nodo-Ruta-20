import ContactKeypad from "./contacts";
import EntitiesKeypad from "./entities";
import CitizenDefenseKeypad from "./citizenDefense";
import ProjectsKeypad from "./projects";
import ScheduleKeypad from "./schedule";
import FormalitiesKeypad from "./formalities";
import AccessionsKeypad from "./accessions";
import AffiliationsKeypad from "./affiliations";
import CitizenEducationKeypad from "./citizenEducation";

const keypadRoutes = [
    {
        path: "/keypad/contacts",
        exact: true,
        component: <ContactKeypad />,
    },
    {
        path: "/keypad/entities",
        exact: true,
        component: <EntitiesKeypad />,
    },
    {
        path: "/keypad/citizen-defense",
        exact: true,
        component: <CitizenDefenseKeypad />,
    },
    {
        path: "/keypad/projects",
        exact: true,
        component: <ProjectsKeypad />,
    },
    {
        path: "/keypad/schedule",
        exact: true,
        component: <ScheduleKeypad />,
    },
    {
        path: "/keypad/formalities",
        exact: true,
        component: <FormalitiesKeypad />,
    },
    {
        path: "/keypad/accessions",
        exact: true,
        component: <AccessionsKeypad />,
    },
    {
        path: "/keypad/affiliations",
        exact: true,
        component: <AffiliationsKeypad />,
    },
    {
        path: "/keypad/citizen-education",
        exact: true,
        component: <CitizenEducationKeypad />,
    },
];

export default keypadRoutes;
