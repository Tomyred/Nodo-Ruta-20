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
                title: "Contactos",
                icon: "fa-solid fa-users",
                type: "item",
                route: "/keypad/contacts",
            },
            {
                title: "Entidades",
                icon: "fa-solid fa-building",
                type: "item",
                route: "/keypad/entities",
            },
            {
                title: "Defensa ciudadana",
                icon: "fa-solid fa-shield",
                type: "item",
                route: "/keypad/citizen-defense",
            },
            {
                title: "Cooperativas",
                icon: "fa-solid fa-people-carry-box",
                type: "item",
                route: "/keypad/cooperatives",
            },
            {
                title: "Proyectos",
                icon: "fa-solid fa-diagram-project",
                type: "item",
                route: "/keypad/projects",
            },
            {
                title: "Servicios informativos",
                icon: "fa-solid fa-info",
                type: "item",
                route: "/keypad/info-service",
            },
            {
                title: "Agenda",
                icon: "fa-solid fa-calendar",
                type: "item",
                route: "/keypad/schedule",
            },
            {
                title: "Educación ciudadana",
                icon: "fa-solid fa-book-open",
                type: "item",
                route: "/keypad/citizen-education",
            },
            {
                title: "Formación política",
                icon: "fa-solid fa-landmark",
                type: "item",
                route: "/keypad/politic-education",
            },
            {
                title: "Bolsa de trabajo",
                icon: "fa-solid fa-briefcase",
                type: "item",
                route: "/keypad/job-bank",
            },
            {
                title: "Bonos DAC",
                icon: "fa-solid fa-briefcase",
                type: "item",
                route: "/keypad/dac-bonuses",
            },
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
                title: "Plataformas",
                icon: "fa-solid fa-bars-staggered",
                type: "item",
                route: "/keypad/platforms",
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
