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
    {
        path: "/schedule/radio/add-broadcast/:id",
        exact: true,
        component: <Broadcast />,
    },
    {
        path: "/schedule/radio/new-station",
        exact: true,
        component: <Station />,
    },
    {
        path: "/schedule/radio/new-station/:id",
        exact: true,
        component: <Station />,
    },
];

export default radioRoutes;
