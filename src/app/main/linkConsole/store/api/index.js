import axios from "axios";

const endpoint = "https://nodo-ruta20-api.herokuapp.com/v1/links";

export const load = (group, searchText) => {
    if (searchText) {
        return axios.get(`${endpoint}?group=${group}&title=${searchText}`);
    } else {
        return axios.get(`${endpoint}?group=${group}`);
    }
};

export const save = link => axios.post(endpoint, link);
export const remove = id => axios.delete(`${endpoint}/${id}`);
