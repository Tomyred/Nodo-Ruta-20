// To see the full list of icons visit https://icons.getbootstrap.com/

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
                title: "Placeholder 1",
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
