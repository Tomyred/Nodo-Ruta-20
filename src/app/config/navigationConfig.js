// Icons: https://fonts.google.com/icons

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
                route: "/link-console/accessions/Adhesiones",
            },
            {
                title: "Afiliaciones",
                icon: "handshake",
                type: "item",
                route: "/link-console/affiliations/Afiliaciones",
            },
            {
                title: "Defensa ciudadana",
                icon: "security",
                type: "item",
                route: "/link-console/citizen-defense/Defensa ciudadana",
            },
            {
                title: "Formación ciudadana",
                icon: "book",
                type: "item",
                route: "/link-console/citizen-education/Formación ciudadana",
            },
            {
                title: "Contactos",
                icon: "contacts",
                type: "item",
                route: "/link-console/contacts/Contactos",
            },
            {
                title: "Cooperativas",
                icon: "accessibility_new",
                type: "item",
                route: "/link-console/cooperatives/Cooperativas",
            },
            {
                title: "Bonos DAC",
                icon: "add_circle",
                type: "item",
                route: "/link-console/dac-bonuses/Bonos DAC",
            },
            {
                title: "Entidades",
                icon: "business",
                type: "item",
                route: "/link-console/entities/Entidades",
            },
            {
                title: "Trámites",
                icon: "article",
                type: "item",
                route: "/link-console/formalities/Trámites",
            },
            {
                title: "Servicios de información",
                icon: "info",
                type: "item",
                route: "/link-console/info-service/Servicios de información",
            },
            {
                title: "Bolsa de trabajo",
                icon: "work",
                type: "item",
                route: "/link-console/job-bank/Bolsa de trabajo",
            },
            {
                title: "Plataformas",
                icon: "reorder",
                type: "item",
                route: "/link-console/platforms/Plataformas",
            },
            {
                title: "Formación política",
                icon: "school",
                type: "item",
                route: "/link-console/politic-education/Formación política",
            },
            {
                title: "Proyectos",
                icon: "account_tree",
                type: "item",
                route: "/link-console/projects/Proyectos",
            },
            {
                title: "Agenda",
                icon: "calendar_month",
                type: "item",
                route: "/link-console/schedule/Agenda",
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
