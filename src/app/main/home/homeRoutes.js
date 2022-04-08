import { lazy } from "react";

const homeRoutes = [
    {
        path: "/home",
        exact: true,
        component: lazy(() => import(".")),
    },
];

export default homeRoutes;
