// To see the full list of icons visit https://fontawesome.com/search?p=1&q=thrash&s=solid%2Cbrands

const navigationConfig = [
    {
        title: "Inicio",
        icon: "home",
        type: "item",
        route: "/home",
    },
    {
        title: "Enlaces",
        icon: "link",
        type: "collapse",
        children: [
            {
                title: "Adhesiones",
                icon: "group_add",
                type: "item",
                route: "/link-console/accessions",
            },
            {
                title: "Afiliaciones",
                icon: "handshake",
                type: "item",
                route: "/link-console/affiliations",
            },
            {
                title: "Defensa ciudadana",
                icon: "security",
                type: "item",
                route: "/link-console/citizen-defense",
            },
            {
                title: "Formación ciudadana",
                icon: "book",
                type: "item",
                route: "/link-console/citizen-education",
            },
            {
                title: "Contactos",
                icon: "contacts",
                type: "item",
                route: "/link-console/contacts",
            },
            {
                title: "Cooperativas",
                icon: "accessibility_new",
                type: "item",
                route: "/link-console/cooperatives",
            },
            {
                title: "Bonos DAC",
                icon: "add_circle",
                type: "item",
                route: "/link-console/dac-bonuses",
            },
            {
                title: "Entidades",
                icon: "business",
                type: "item",
                route: "/link-console/entities",
            },
            {
                title: "Trámites",
                icon: "article",
                type: "item",
                route: "/link-console/formalities",
            },
            {
                title: "Servicios de información",
                icon: "info",
                type: "item",
                route: "/link-console/info-service",
            },
            {
                title: "Bolsa de trabajo",
                icon: "work",
                type: "item",
                route: "/link-console/job-bank",
            },
            {
                title: "Plataformas",
                icon: "reorder",
                type: "item",
                route: "/link-console/platforms",
            },
            {
                title: "Formación política",
                icon: "school",
                type: "item",
                route: "/link-console/politic-education",
            },
            {
                title: "Proyectos",
                icon: "account_tree",
                type: "item",
                route: "/link-console/projects",
            },
            {
                title: "Agenda",
                icon: "calendar_month",
                type: "item",
                route: "/link-console/schedule",
            },
        ],
    },
    {
        title: "Horarios",
        icon: "schedule",
        type: "collapse",
        children: [
            {
                title: "Radio",
                icon: "radio",
                type: "item",
                route: "/schedule/radio",
            },
            {
                title: "Aulas",
                icon: "school",
                type: "item",
                route: "/schedule/classroom",
            },
            {
                title: "Aula virtual",
                icon: "cast_for_education",
                type: "item",
                route: "/schedule/virtual-classroom",
            },
        ],
    },
];

export default navigationConfig;
