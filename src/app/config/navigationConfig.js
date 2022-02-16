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
                title: "Enlaces de {{preguntar a Fer}}}",
                icon: "fa-solid fa-link",
                type: "item",
                route: "/keypad",
            },
            {
                title: "Placeholder 2",
                icon: "fa-solid fa-link",
                type: "item",
                route: "/placeholder2",
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
