import * as api from "../api";
import * as types from "./types";

export const loadClassroom = () => async dispatch => {
    try {
        dispatch({
            type: types.V_CLASSROOM_LOAD_INIT,
        });
        const res = await api.load();
        if (res.data.error === false) {
            dispatch({
                type: types.V_CLASSROOM_LOAD_SUCCEED,
                payload: res.data.data,
            });
        } else {
            dispatch({
                type: types.V_CLASSROOM_LOAD_FAILED,
            });
        }
    } catch (error) {
        console.error(error);
        dispatch({
            type: types.V_CLASSROOM_LOAD_FAILED,
        });
    }
};

export const createClassroom = classroom => async dispatch => {
    try {
        dispatch({
            type: types.ADD_V_CLASSROOM_INIT,
        });
        const res = await api.save(classroom);
        if (res.data.error === false) {
            dispatch({
                type: types.ADD_V_CLASSROOM_SUCCEED,
            });
        } else {
            dispatch({
                type: types.ADD_V_CLASSROOM_FAILED,
            });
        }
    } catch (error) {
        console.error(error);
        dispatch({
            type: types.ADD_V_CLASSROOM_FAILED,
        });
    }
};

export const deleteClassroom = id => async dispatch => {
    try {
        dispatch({
            type: types.DELETE_V_CLASSROOM_INIT,
        });

        const res = await api.remove(id);
        if (res.data.error === false) {
            dispatch({
                type: types.DELETE_V_CLASSROOM_SUCCEED,
            });
        } else {
            dispatch({
                type: types.DELETE_V_CLASSROOM_FAILED,
            });
        }
    } catch (error) {
        console.error(error);
        dispatch({
            type: types.DELETE_V_CLASSROOM_FAILED,
        });
    }
};

export const loadClassroomById = id => async dispatch => {
    try {
        dispatch({
            type: types.V_CLASSROOM_ENTITY_LOAD_INIT,
        });
        const res = await api.loadById(id);
        if (res.data.error === false) {
            dispatch({
                type: types.V_CLASSROOM_ENTITY_LOAD_SUCCEED,
                payload: res.data.data,
            });
        } else {
            dispatch({
                type: types.V_CLASSROOM_ENTITY_LOAD_FAILED,
            });
        }
    } catch (error) {
        console.error(error);
        dispatch({
            type: types.V_CLASSROOM_ENTITY_LOAD_FAILED,
        });
    }
};

export const loadClassroomNames = () => async dispatch => {
    try {
        dispatch({
            type: types.V_CLASSROOM_NAMES_LOAD_INIT,
        });
        const res = await api.loadNames();
        if (res.data.error === false) {
            dispatch({
                type: types.V_CLASSROOM_NAMES_LOAD_SUCCEED,
                payload: res.data.data,
            });
        } else {
            dispatch({
                type: types.V_CLASSROOM_NAMES_LOAD_FAILED,
            });
        }
    } catch (error) {
        console.error(error);
        dispatch({
            type: types.V_CLASSROOM_NAMES_LOAD_FAILED,
        });
    }
};

export const addCourse = (course, id) => async dispatch => {
    try {
        dispatch({
            type: types.SAVE_V_INIT,
        });
        const res = await api.update(course, id);
        if (res.data.error === false) {
            dispatch({
                type: types.SAVE_V_SUCCEED,
            });
        } else {
            dispatch({
                type: types.SAVE_V_FAILED,
            });
        }
    } catch (error) {
        console.error(error);
        dispatch({
            type: types.SAVE_V_FAILED,
        });
    }
};

export const removeCourse = (course, day, id) => async dispatch => {
    try {
        dispatch({
            type: types.DELETE_V_COURSE_INIT,
        });

        const res = await api.removeCourse(course, day, id);
        if (res.data.error === false) {
            dispatch({
                type: types.DELETE_V_COURSE_SUCCEED,
            });
        } else {
            dispatch({
                type: types.DELETE_V_COURSE_FAILED,
            });
        }
    } catch (error) {
        console.error(error);
        dispatch({
            type: types.DELETE_V_COURSE_FAILED,
        });
    }
};

export const editCourse = (updated, day, id) => async dispatch => {
    try {
        dispatch({
            type: types.SAVE_V_INIT,
        });
        const res = await api.updateCourse(updated, day, id);
        if (res.data.error === false) {
            dispatch({
                type: types.SAVE_V_SUCCEED,
            });
        } else {
            dispatch({
                type: types.SAVE_V_FAILED,
            });
        }
    } catch (error) {
        console.error(error);
        dispatch({
            type: types.SAVE_V_FAILED,
        });
    }
};

export const setCourse = (course, day) => async dispatch => {
    const { description, name, hosts, hour, _id } = course;
    dispatch({
        type: types.SET_V_COURSE_DETAIL,
        payload: { description, name, hosts, hour, _id, day },
    });
};
