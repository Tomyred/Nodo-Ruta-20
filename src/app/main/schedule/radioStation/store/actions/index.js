import * as api from "../api";
import * as types from "../types";

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
        dispatch({
            type: types.RADIO_LOAD_FAILED,
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
        dispatch({
            type: types.RADIO_NAMES_LOAD_FAILED,
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
        dispatch({
            type: types.ENTITY_LOAD_FAILED,
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
        dispatch({
            type: types.ADD_BROADCAST_FAILED,
        });
    }
};

export const createRadioStation = radioStation => async dispatch => {
    try {
        dispatch({
            type: types.ADD_RADIO_STATION_INIT,
        });
        const res = await api.save(radioStation);
        console.log(res);
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
        dispatch({
            type: types.ADD_RADIO_STATION_FAILED,
        });
    }
};
