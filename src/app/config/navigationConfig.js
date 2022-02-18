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
                route: "/keypad/accessions",
            },
            {
                title: "Afiliaciones",
                icon: "fa-solid fa-handshake",
                type: "item",
                route: "/keypad/affiliations",
            },
            {
                title: "Defensa ciudadana",
                icon: "fa-solid fa-shield",
                type: "item",
                route: "/keypad/citizen-defense",
            },
            {
                title: "Formación ciudadana",
                icon: "fa-solid fa-book-open",
                type: "item",
                route: "/keypad/citizen-education",
            },
            {
                title: "Contactos",
                icon: "fa-solid fa-users",
                type: "item",
                route: "/keypad/contacts",
            },
            {
                title: "Cooperativas",
                icon: "fa-solid fa-people-carry-box",
                type: "item",
                route: "/keypad/cooperatives",
            },
            {
                title: "Bonos DAC",
                icon: "fa-solid fa-plus",
                type: "item",
                route: "/keypad/dac-bonuses",
            },
            {
                title: "Entidades",
                icon: "fa-solid fa-building",
                type: "item",
                route: "/keypad/entities",
            },
            {
                title: "Trámites",
                icon: "fa-solid fa-file-signature",
                type: "item",
                route: "/keypad/formalities",
            },
            {
                title: "Servicios de información",
                icon: "fa-solid fa-info",
                type: "item",
                route: "/keypad/info-service",
            },
            {
                title: "Bolsa de trabajo",
                icon: "fa-solid fa-briefcase",
                type: "item",
                route: "/keypad/job-bank",
            },
            {
                title: "Plataformas",
                icon: "fa-solid fa-bars-staggered",
                type: "item",
                route: "/keypad/platforms",
            },
            {
                title: "Formación política",
                icon: "fa-solid fa-landmark",
                type: "item",
                route: "/keypad/politic-education",
            },
            {
                title: "Proyectos",
                icon: "fa-solid fa-diagram-project",
                type: "item",
                route: "/keypad/projects",
            },
            {
                title: "Agenda",
                icon: "fa-solid fa-calendar",
                type: "item",
                route: "/keypad/schedule",
            },
        ],
    },
    {
        title: "Talleres cooperativos",
        icon: "fa-solid fa-tree",
        type: "item",
        route: "/courses",
    },
];

export default navigationConfig;
