import { lazy } from "react";

const radioRoutes = [
    {
        path: "/schedule/radio",
        exact: true,
        component: lazy(() => import(".")),
    },
    {
        path: "/schedule/radio/new-station",
        exact: true,
        component: lazy(() => import("./forms/station")),
    },
    {
        path: "/schedule/radio/new-broadcast",
        exact: true,
        component: lazy(() => import("./forms/broadcast")),
    },
    {
        path: "/schedule/radio/new-broadcast/:id",
        exact: true,
        component: lazy(() => import("./forms/broadcast")),
    },
    {
        path: "/schedule/radio/new-station",
        exact: true,
        component: lazy(() => import("./forms/station")),
    },
    {
        path: "/schedule/radio/new-station/:id",
        exact: true,
        component: lazy(() => import("./forms/station")),
    },
];

export default radioRoutes;
