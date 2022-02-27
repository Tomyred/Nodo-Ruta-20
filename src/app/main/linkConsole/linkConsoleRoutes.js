import LinkConsole from ".";

const linkConsoleRoutes = [
    {
        path: "/link-console/contacts",
        exact: true,
        component: <LinkConsole group="contacts" title="Contactos" />,
    },
    {
        path: "/link-console/entities",
        exact: true,
        component: <LinkConsole group="entities" title="Entidades" />,
    },
    {
        path: "/link-console/citizen-defense",
        exact: true,
        component: (
            <LinkConsole group="citizen-defense" title="Defensa ciudadana" />
        ),
    },
    {
        path: "/link-console/projects",
        exact: true,
        component: <LinkConsole group="projects" title="Proyectos" />,
    },
    {
        path: "/link-console/schedule",
        exact: true,
        component: <LinkConsole group="schedule" title="Agenda" />,
    },
    {
        path: "/link-console/formalities",
        exact: true,
        component: <LinkConsole group="formalities" title="Trámites" />,
    },
    {
        path: "/link-console/accessions",
        exact: true,
        component: <LinkConsole group="accessions" title="Adhesiones" />,
    },
    {
        path: "/link-console/affiliations",
        exact: true,
        component: <LinkConsole group="affiliations" title="Afiliaciones" />,
    },
    {
        path: "/link-console/citizen-education",
        exact: true,
        component: (
            <LinkConsole
                group="citizen-education"
                title="Formación ciudadana"
            />
        ),
    },
    {
        path: "/link-console/cooperatives",
        exact: true,
        component: <LinkConsole group="cooperatives" title="Cooperativas" />,
    },
    {
        path: "/link-console/dac-bonuses",
        exact: true,
        component: <LinkConsole group="dac-bonuses" title="Bonos DAC" />,
    },
    {
        path: "/link-console/platforms",
        exact: true,
        component: <LinkConsole group="platforms" title="Plataformas" />,
    },
    {
        path: "/link-console/info-service",
        exact: true,
        component: (
            <LinkConsole
                group="info-service"
                title="Servicios de información"
            />
        ),
    },
    {
        path: "/link-console/job-Bank",
        exact: true,
        component: <LinkConsole group="job-Bank" title="Banca de trabajo" />,
    },
    {
        path: "/link-console/politic-education",
        exact: true,
        component: (
            <LinkConsole group="politic-education" title="Formación política" />
        ),
    },
];

export default linkConsoleRoutes;
