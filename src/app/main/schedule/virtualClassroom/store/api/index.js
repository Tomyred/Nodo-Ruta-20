import axios from "axios";

const endpoint = "https://nodo-ruta20-api.herokuapp.com/v1/classroom";

export const load = () => axios.get(`${endpoint}/t/virtual`);

export const loadNames = () => axios.get(`${endpoint}/t/names/virtual`);

export const loadById = id => axios.get(`${endpoint}/${id}`);

export const update = (entity, id) =>
    axios.put(`${endpoint}/schedule/${id}`, entity);

export const updateCourse = (updated, day, id) =>
    axios.put(`${endpoint}/schedule/update/${id}/${day}`, updated);

export const save = entity => axios.post(endpoint, entity);

export const removeCourse = (course, day, id) =>
    axios.put(`${endpoint}/schedule/remove/${id}/${day}`, course);

export const remove = id => axios.delete(`${endpoint}/${id}`);
