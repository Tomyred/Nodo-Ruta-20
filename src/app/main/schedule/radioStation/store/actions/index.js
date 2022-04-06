import * as api from "../api";
import * as types from "./types";

export const loadRadio = () => async dispatch => {
    try {
        dispatch({
            type: types.RADIO_LOAD_INIT,
        });
        const res = await api.load();
        if (res.data.error === false) {
            dispatch({
                type: types.RADIO_LOAD_SUCCEED,
                payload: res.data.data,
            });
        } else {
            dispatch({
                type: types.RADIO_LOAD_FAILED,
            });
        }
    } catch (error) {
        console.error(error);
        dispatch({
            type: types.RADIO_LOAD_FAILED,
        });
    }
};

export const createRadioStation = radioStation => async dispatch => {
    try {
        dispatch({
            type: types.ADD_RADIO_STATION_INIT,
        });
        const res = await api.save(radioStation);
        if (res.data.error === false) {
            dispatch({
                type: types.ADD_RADIO_STATION_SUCCEED,
            });
        } else {
            dispatch({
                type: types.ADD_RADIO_STATION_FAILED,
            });
        }
    } catch (error) {
        console.error(error);
        dispatch({
            type: types.ADD_RADIO_STATION_FAILED,
        });
    }
};

export const deleteRadioStation = id => async dispatch => {
    try {
        dispatch({
            type: types.DELETE_RADIO_STATION_INIT,
        });

        const res = await api.remove(id);
        if (res.data.error === false) {
            dispatch({
                type: types.DELETE_RADIO_STATION_SUCCEED,
            });
        } else {
            dispatch({
                type: types.DELETE_RADIO_STATION_FAILED,
            });
        }
    } catch (error) {
        console.error(error);
        dispatch({
            type: types.DELETE_RADIO_STATION_FAILED,
        });
    }
};

export const loadRadioById = id => async dispatch => {
    try {
        dispatch({
            type: types.ENTITY_LOAD_INIT,
        });
        const res = await api.loadById(id);
        if (res.data.error === false) {
            dispatch({
                type: types.ENTITY_LOAD_SUCCEED,
                payload: res.data.data,
            });
        } else {
            dispatch({
                type: types.ENTITY_LOAD_FAILED,
            });
        }
    } catch (error) {
        console.error(error);
        dispatch({
            type: types.ENTITY_LOAD_FAILED,
        });
    }
};

export const loadRadioNames = () => async dispatch => {
    try {
        dispatch({
            type: types.RADIO_NAMES_LOAD_INIT,
        });
        const res = await api.loadNames();
        if (res.data.error === false) {
            dispatch({
                type: types.RADIO_NAMES_LOAD_SUCCEED,
                payload: res.data.data,
            });
        } else {
            dispatch({
                type: types.RADIO_NAMES_LOAD_FAILED,
            });
        }
    } catch (error) {
        console.error(error);
        dispatch({
            type: types.RADIO_NAMES_LOAD_FAILED,
        });
    }
};

export const addBroadcastToRadio = (broadcast, id) => async dispatch => {
    try {
        dispatch({
            type: types.ADD_BROADCAST_INIT,
        });
        const res = await api.update(broadcast, id);
        if (res.data.error === false) {
            dispatch({
                type: types.ADD_BROADCAST_SUCCEED,
            });
        } else {
            dispatch({
                type: types.ADD_BROADCAST_FAILED,
            });
        }
    } catch (error) {
        console.error(error);
        dispatch({
            type: types.ADD_BROADCAST_FAILED,
        });
    }
};

export const removeBroadcast = (broadcast, day, id) => async dispatch => {
    try {
        dispatch({
            type: types.DELETE_BROADCAST_INIT,
        });

        const res = await api.removeBroadcast(broadcast, day, id);
        if (res.data.error === false) {
            dispatch({
                type: types.DELETE_BROADCAST_SUCCEED,
            });
        } else {
            dispatch({
                type: types.DELETE_BROADCAST_FAILED,
            });
        }
    } catch (error) {
        console.error(error);
        dispatch({
            type: types.DELETE_BROADCAST_FAILED,
        });
    }
};

export const editBroadcast = (updated, day, id) => async dispatch => {
    try {
        dispatch({
            type: types.SAVE_INIT,
        });
        const res = await api.updateBroadcast(updated, day, id);
        if (res.data.error === false) {
            dispatch({
                type: types.SAVE_SUCCEED,
            });
        } else {
            dispatch({
                type: types.SAVE_FAILED,
            });
        }
    } catch (error) {
        console.error(error);
        dispatch({
            type: types.SAVE_FAILED,
        });
    }
};

export const setBroadcast = (broadcast, day) => async dispatch => {
    const { description, name, hosts, hour, _id } = broadcast;
    dispatch({
        type: types.SET_BROADCAST_DETAIL,
        payload: { description, name, hosts, hour, _id, day },
    });
};
