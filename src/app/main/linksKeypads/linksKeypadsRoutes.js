import ContactKeypad from "./contacts";
import EntitiesKeypad from "./entities";
import CitizenDefenseKeypad from "./citizenDefense";
import ProjectsKeypad from "./projects";
import ScheduleKeypad from "./schedule";
import ProceduresKeypad from "./procedures";

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
        path: "/keypad/procedures",
        exact: true,
        component: <ProceduresKeypad />,
    },
];

export default keypadRoutes;
