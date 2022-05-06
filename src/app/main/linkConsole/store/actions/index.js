import * as types from "./types";
import * as api from "../api";

export const loadLinks = (group, searchText) => async dispatch => {
    try {
        dispatch({
            type: types.CONSOLE_LINKS_LOAD_INIT,
        });

        const res = await api.load(group, searchText);
        if (res.data.error === false) {
            dispatch({
                type: types.CONSOLE_LINKS_LOAD_SUCCEED,
                payload: res.data.data,
            });
        } else {
            dispatch({
                type: types.CONSOLE_LINKS_LOAD_FAILED,
            });
        }
    } catch (error) {
        dispatch({
            type: types.CONSOLE_LINKS_LOAD_FAILED,
        });
    }
};

export const saveLink = link => async dispatch => {
    try {
        dispatch({
            type: types.CONSOLE_LINK_SAVE_INIT,
        });

        const res = await api.save(link);
        if (res.data.error === false) {
            dispatch({
                type: types.CONSOLE_LINK_SAVE_SUCCEED,
            });
        } else {
            dispatch({
                type: types.CONSOLE_LINK_SAVE_FAILED,
            });
        }
    } catch (error) {
        dispatch({
            type: types.CONSOLE_LINK_SAVE_FAILED,
        });
    }
};

export const updateLink = (link, id) => async dispatch => {
    try {
        dispatch({
            type: types.CONSOLE_LINK_SAVE_INIT,
        });

        const res = await api.update(link, id);
        if (res.data.error === false) {
            dispatch({
                type: types.CONSOLE_LINK_SAVE_SUCCEED,
            });
        } else {
            dispatch({
                type: types.CONSOLE_LINK_SAVE_FAILED,
            });
        }
    } catch (error) {
        dispatch({
            type: types.CONSOLE_LINK_SAVE_FAILED,
        });
    }
};

export const setEntityToEdit = entity => dispatch => {
    dispatch({
        type: types.CONSOLE_SET_ENTITY,
        payload: entity,
    });
};

export const removeLink = id => async dispatch => {
    try {
        dispatch({
            type: types.CONSOLE_LINK_DELETE_INIT,
        });
        const res = await api.remove(id);
        if (res.data.error === false) {
            dispatch({
                type: types.CONSOLE_LINK_DELETE_SUCCEED,
            });
        } else {
            dispatch({
                type: types.CONSOLE_LINK_DELETE_FAILED,
            });
        }
    } catch (error) {
        dispatch({
            type: types.CONSOLE_LINK_DELETE_FAILED,
        });
    }
};
