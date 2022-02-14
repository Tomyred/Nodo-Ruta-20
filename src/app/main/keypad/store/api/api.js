import axios from "axios";

const endpoint = "https://nodo-ruta20-api.herokuapp.com/v1/links";

export const load = () => axios.get(endpoint);
export const save = link => axios.post(endpoint, link);
