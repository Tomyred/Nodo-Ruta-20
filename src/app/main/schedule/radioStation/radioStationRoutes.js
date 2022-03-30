import Radio from ".";
import Broadcast from "./forms/broadcast";
import Station from "./forms/station";

const radioRoutes = [
    {
        path: "/schedule/radio",
        exact: true,
        component: <Radio />,
    },
    {
        path: "/schedule/radio/new-station",
        exact: true,
        component: <Station />,
    },
    {
        path: "/schedule/radio/add-broadcast",
        exact: true,
        component: <Broadcast />,
    },
];

export default radioRoutes;
