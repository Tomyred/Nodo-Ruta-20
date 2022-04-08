import { lazy } from "react";

const configurationPanelRoutes = [
    {
        path: "/settings",
        exact: true,
        component: lazy(() => import(".")),
    },
];

export default configurationPanelRoutes;
