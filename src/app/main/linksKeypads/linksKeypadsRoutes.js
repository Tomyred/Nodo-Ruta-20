import ContactKeypad from "./contacts";
import EntitiesKeypad from "./entities";
import CitizenDefenseKeypad from "./citizenDefense";
import ProjectsKeypad from "./projects";
import ScheduleKeypad from "./schedule";
import FormalitiesKeypad from "./formalities";
import AccessionsKeypad from "./accessions";
import AffiliationsKeypad from "./affiliations";
import CitizenEducationKeypad from "./citizenEducation";
import CooperativesKeypad from "./cooperatives";
import DACBonusesKeypad from "./DACBonuses";
import InfoServiceKeypad from "./infoService";
import JobBankKeypad from "./jobBank";
import PlatformsKeypad from "./platforms";
import PoliticEducationKeypad from "./politicEducation";

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
    {
        path: "/keypad/cooperatives",
        exact: true,
        component: <CooperativesKeypad />,
    },
    {
        path: "/keypad/dac-bonuses",
        exact: true,
        component: <DACBonusesKeypad />,
    },
    {
        path: "/keypad/platforms",
        exact: true,
        component: <PlatformsKeypad />,
    },
    {
        path: "/keypad/info-service",
        exact: true,
        component: <InfoServiceKeypad />,
    },
    {
        path: "/keypad/job-Bank",
        exact: true,
        component: <JobBankKeypad />,
    },
    {
        path: "/keypad/politic-education",
        exact: true,
        component: <PoliticEducationKeypad />,
    },
];

export default keypadRoutes;
