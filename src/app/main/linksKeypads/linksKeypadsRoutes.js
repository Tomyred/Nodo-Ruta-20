import ContactKeypad from "./contact";
import EntitiesKeypad from "./entities";

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
];

export default keypadRoutes;
