import axios from "axios";

const endpoint = "https://nodo-ruta20-api.herokuapp.com/v1/radioStation";

export const load = () => axios.get(endpoint);
export const loadNames = () => axios.get(endpoint + "/names");
export const loadById = id => axios.get(`${endpoint}/${id}`);
export const update = (entity, id) =>
    axios.put(`${endpoint}/schedule/${id}`, entity);
export const save = entity => axios.post(endpoint, entity);
export const remove = id => axios.delete(`${endpoint}/${id}`);
