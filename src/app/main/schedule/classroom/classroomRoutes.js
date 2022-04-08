import { lazy } from "react";

const radioRoutes = [
    {
        path: "/schedule/classroom",
        exact: true,
        component: lazy(() => import(".")),
    },
    {
        path: "/schedule/classroom/new-classroom",
        exact: true,
        component: lazy(() => import("./forms/classroom/index")),
    },
    {
        path: "/schedule/classroom/new-course",
        exact: true,
        component: lazy(() => import("./forms/course/index")),
    },
    // {
    //     path: "/schedule/classroom/new-classroom/:id",
    //     exact: true,
    //     component: lazy(() => import("./forms/classroom/index")),
    // },
    {
        path: "/schedule/classroom/new-course/:id",
        exact: true,
        component: lazy(() => import("./forms/course/index")),
    },
];

export default radioRoutes;
