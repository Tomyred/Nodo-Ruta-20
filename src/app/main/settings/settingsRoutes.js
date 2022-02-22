import ConfigurationPanel from ".";

const configurationPanelRoutes = [
    {
        path: "/settings",
        exact: true,
        component: <ConfigurationPanel />,
    },
];

export default configurationPanelRoutes;
