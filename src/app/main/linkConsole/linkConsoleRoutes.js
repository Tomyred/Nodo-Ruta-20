import { lazy } from "react";

const linkConsoleRoutes = [
    {
        path: "/link-console/:group/:title",
        exact: true,
        component: lazy(() => import(".")),
    },
];

export default linkConsoleRoutes;
