import axios from "axios";

const endpoint = "https://nodo-ruta20-api.herokuapp.com/v1/links/contacts";

export const load = () => axios.get(endpoint);
export const save = link => axios.post(endpoint, link);
export const remove = id => axios.delete(`${endpoint}/${id}`);
