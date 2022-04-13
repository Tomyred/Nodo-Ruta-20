import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    deleteClassroom,
    loadClassroomById,
    loadClassroomNames,
} from "./store/actions";
import Table from "./table";
import Modal from "react-modal/lib/components/Modal";
import LoadingScreen from "../../../pages/loadingScreen";
import { Link } from "react-router-dom";

const Classroom = () => {
    const dispatch = useDispatch();
    const classroomStore = useSelector(store => store.schedule.classroom);
    const {
        namesLoaded,
        saved,
        deleted,
        classroomNames,
        namesLoading,
        namesLoadingError,
        entity,
        deletingClassroom,
        loading,
        classroomDeleted,
    } = classroomStore;

    const [classroomId, setClassroomId] = useState(entity ? entity._id : "");
    const [deleteModal, setDeleteModal] = useState(false);

    useEffect(() => {
        if (namesLoaded === false) {
            dispatch(loadClassroomNames());
        }
        if (saved && classroomId) {
            dispatch(loadClassroomById(classroomId));
        }
        if (deleted === true && classroomId) {
            dispatch(loadClassroomById(classroomId));
        }
        if (classroomDeleted) {
            setDeleteModal(false);
        }
    }, [namesLoaded, saved, deleted, dispatch, classroomId, classroomDeleted]);

    const getClassroom = id => {
        setClassroomId(id);
        if (!id) {
            return;
        }

        dispatch(loadClassroomById(id));
    };
    const setSelectContent = () => {
        if (namesLoaded && classroomNames.length === 0) {
            return <option value="">No hay datos</option>;
        }
        if (classroomNames.length > 0) {
            return classroomNames.map((classroom, i) => {
                return (
                    <option key={i} value={classroom._id}>
                        {classroom.classroomName}
                    </option>
                );
            });
        }

        if (namesLoading) {
            return <option value=""> Cargando... </option>;
        }

        if (namesLoadingError) {
            return <option value=""> Error cargando las aulas </option>;
        }
    };

    const handleDeleteConfirm = () => {
        dispatch(deleteClassroom(entity._id));
    };

    const selectContent = setSelectContent();
    const deleteConfirmationModal =
        entity === null ? (
            ""
        ) : (
            <Modal
                ariaHideApp={false}
                isOpen={deleteModal}
                onRequestClose={() => setDeleteModal(false)}
                contentLabel="Example Modal"
                className="delete__modal"
            >
                <p>
                    ¿Seguro que quieres eliminar el aula?
                    <strong> {entity.classRoomName}</strong>?
                </p>
                <div>
                    <button
                        onClick={handleDeleteConfirm}
                        className="delete__button"
                    >
                        Eliminar
                    </button>
                    <button
                        className="cancel__button"
                        onClick={() => setDeleteModal(false)}
                    >
                        Cancelar
                    </button>
                </div>
            </Modal>
        );

    if (deletingClassroom === true || loading) {
        <LoadingScreen />;
    }
    return (
        <div className="radio__component">
            {deleteConfirmationModal}
            <div
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    transition: { delay: 0.5 },
                }}
                className="radio__header"
            >
                <h2>Aulas</h2>
                <p>Programación</p>
            </div>
            <div className="radio__body">
                <Link to="/schedule/classroom/new-classroom">
                    <button>Nueva aula</button>
                </Link>

                <div className="select__container">
                    <select
                        defaultValue=""
                        onChange={e => {
                            getClassroom(e.target.value);
                        }}
                    >
                        <option value="">Elija un aula</option>
                        {selectContent}
                    </select>

                    <button
                        onClick={() => setDeleteModal(true)}
                        disabled={entity === null}
                    >
                        Eliminar aula
                    </button>
                </div>

                {entity?.reference ? (
                    <a
                        href={entity.reference}
                        target="_blank"
                        rel="noreferrer"
                        className="reference"
                    >
                        <span className="material-icons md-48 action__button">
                            school
                        </span>
                    </a>
                ) : (
                    ""
                )}
                {!entity ? (
                    ""
                ) : (
                    <span className="radio__title">
                        <strong>
                            PROGRAMACIÓN DE {entity.classroomName.toUpperCase()}
                        </strong>

                        <Link to="new-course">
                            <button className="new__broadcast_button">
                                Nuevo curso
                            </button>
                        </Link>
                    </span>
                )}

                <Table dispatch={dispatch} classroomStore={classroomStore} />
            </div>
        </div>
    );
};

export default Classroom;
