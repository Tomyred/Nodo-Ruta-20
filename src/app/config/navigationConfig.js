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
