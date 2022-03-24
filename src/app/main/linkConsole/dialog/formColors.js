const FORM_COLORS = [
    { name: "Azul", value: "#2196f3" },
    { name: "Rojo", value: "#c4302b" },
    { name: "Verde", value: "#9acd32" },
    { name: "Violeta", value: "#9932cc" },
    { name: "Amarillo", value: "#FFFF00" },
    { name: "Turquesa", value: "#40e0d0" },
    { name: "Naranja", value: "#ffa500" },
    { name: "Gris", value: "#a9a9a9" },
    { name: "Carmesí", value: "#dc143c" },
    { name: "Salmón", value: "#e9967a" },
];

export default function getRandomColor() {
    const randomNumber = Math.random() * FORM_COLORS.length - 1;
    var index = Math.floor(randomNumber);
    if (index < 0) {
        index++;
    }
    const color = FORM_COLORS[index].value;
    return color;
}
