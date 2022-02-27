// To see the full list of icons visit https://fontawesome.com/search?p=1&q=thrash&s=solid%2Cbrands

const navigationConfig = [
    {
        title: "Inicio",
        icon: "fa-solid fa-house",
        type: "item",
        route: "/home",
    },
    {
        title: "Enlaces",
        icon: "fa-solid fa-link",
        type: "collapse",
        children: [
            {
                title: "Adhesiones",
                icon: "fa-solid fa-object-group",
                type: "item",
                route: "/link-console/accessions",
            },
            {
                title: "Afiliaciones",
                icon: "fa-solid fa-handshake",
                type: "item",
                route: "/link-console/affiliations",
            },
            {
                title: "Defensa ciudadana",
                icon: "fa-solid fa-shield",
                type: "item",
                route: "/link-console/citizen-defense",
            },
            {
                title: "Formación ciudadana",
                icon: "fa-solid fa-book-open",
                type: "item",
                route: "/link-console/citizen-education",
            },
            {
                title: "Contactos",
                icon: "fa-solid fa-users",
                type: "item",
                route: "/link-console/contacts",
            },
            {
                title: "Cooperativas",
                icon: "fa-solid fa-people-carry-box",
                type: "item",
                route: "/link-console/cooperatives",
            },
            {
                title: "Bonos DAC",
                icon: "fa-solid fa-plus",
                type: "item",
                route: "/link-console/dac-bonuses",
            },
            {
                title: "Entidades",
                icon: "fa-solid fa-building",
                type: "item",
                route: "/link-console/entities",
            },
            {
                title: "Trámites",
                icon: "fa-solid fa-file-signature",
                type: "item",
                route: "/link-console/formalities",
            },
            {
                title: "Servicios de información",
                icon: "fa-solid fa-info",
                type: "item",
                route: "/link-console/info-service",
            },
            {
                title: "Bolsa de trabajo",
                icon: "fa-solid fa-briefcase",
                type: "item",
                route: "/link-console/job-bank",
            },
            {
                title: "Plataformas",
                icon: "fa-solid fa-bars-staggered",
                type: "item",
                route: "/link-console/platforms",
            },
            {
                title: "Formación política",
                icon: "fa-solid fa-landmark",
                type: "item",
                route: "/link-console/politic-education",
            },
            {
                title: "Proyectos",
                icon: "fa-solid fa-diagram-project",
                type: "item",
                route: "/link-console/projects",
            },
            {
                title: "Agenda",
                icon: "fa-solid fa-calendar",
                type: "item",
                route: "/link-console/schedule",
            },
        ],
    },
    {
        title: "Horarios",
        icon: "fa-solid fa-clock",
        type: "collapse",
        children: [
            {
                title: "Radio",
                icon: "fa-solid fa-tower-broadcast",
                type: "item",
                route: "/schedule/radio",
            },
            {
                title: "Aulas",
                icon: "fa-solid fa-school",
                type: "item",
                route: "/schedule/classroom",
            },
            {
                title: "Aula virtual",
                icon: "fa-solid fa-chalkboard-user",
                type: "item",
                route: "/schedule/virtual-classroom",
            },
        ],
    },
];

export default navigationConfig;
