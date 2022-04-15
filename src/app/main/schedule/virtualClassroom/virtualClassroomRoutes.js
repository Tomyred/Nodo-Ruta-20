import { lazy } from "react";

const virtualClassroomRoutes = [
    {
        path: "/schedule/virtual-classroom",
        exact: true,
        component: lazy(() => import(".")),
    },
    {
        path: "/schedule/virtual-classroom/new-virtual-classroom",
        exact: true,
        component: lazy(() => import("./forms/classroom/index")),
    },
    {
        path: "/schedule/virtual-classroom/new-course",
        exact: true,
        component: lazy(() => import("./forms/course/index")),
    },
    // {
    //     path: "/schedule/classroom/new-classroom/:id",
    //     exact: true,
    //     component: lazy(() => import("./forms/classroom/index")),
    // },
    {
        path: "/schedule/virtual-classroom/edit-course/:id",
        exact: true,
        component: lazy(() => import("./forms/course/index")),
    },
];

export default virtualClassroomRoutes;
