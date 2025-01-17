import React, { useEffect, useState } from "react";
import {
    deleteRadioStation,
    loadRadioById,
    loadRadioNames,
} from "./store/actions";
import Table from "./table";
import Modal from "react-modal/lib/components/Modal";
import LoadingScreen from "../../../pages/loadingScreen";
import { Link } from "react-router-dom";

const RadioStation = ({ dispatch, store }) => {
    const radioStationStore = store.schedule.radioStation;
    const {
        namesLoaded,
        saved,
        deleted,
        radioNames,
        namesLoading,
        namesLoadingError,
        entity,
        deletingStation,
        loading,
        stationDeleted,
    } = radioStationStore;

    const [radioStationId, setRadioStationId] = useState(
        entity ? entity._id : ""
    );
    const [deleteModal, setDeleteModal] = useState(false);

    useEffect(() => {
        if (namesLoaded === false) {
            dispatch(loadRadioNames());
        }
        if (saved && radioStationId) {
            dispatch(loadRadioById(radioStationId));
        }
        if (deleted === true && radioStationId) {
            dispatch(loadRadioById(radioStationId));
        }
        if (stationDeleted) {
            setDeleteModal(false);
        }
    }, [namesLoaded, saved, deleted, dispatch, radioStationId, stationDeleted]);

    const getRadioStation = id => {
        setRadioStationId(id);
        if (!id) {
            return;
        }

        dispatch(loadRadioById(id));
    };
    const setSelectContent = () => {
        if (namesLoaded && radioNames.length === 0) {
            return <option value="">No hay datos</option>;
        }
        if (radioNames.length > 0) {
            return radioNames.map((station, i) => {
                return (
                    <option key={i} value={station._id}>
                        {station.stationName}
                    </option>
                );
            });
        }

        if (namesLoading) {
            return <option value=""> Cargando... </option>;
        }

        if (namesLoadingError) {
            return <option value=""> Error cargando las estaciones </option>;
        }
    };

    const handleDeleteConfirm = () => {
        dispatch(deleteRadioStation(entity._id));
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
                    ¿Seguro que quieres eliminar
                    <strong> {entity.stationName}</strong>?
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

    if (deletingStation === true || loading) {
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
                <h2>Radio</h2>
                <p>Programación</p>
            </div>
            <div className="radio__body">
                <Link to="new-station">
                    <button>Nueva emisora</button>
                </Link>

                <div className="select__container">
                    <select
                        defaultValue=""
                        onChange={e => {
                            getRadioStation(e.target.value);
                        }}
                    >
                        <option value="">Elija una estación</option>
                        {selectContent}
                    </select>

                    <button
                        onClick={() => setDeleteModal(true)}
                        disabled={entity === null}
                    >
                        Eliminar estación
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
                            radio
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
                            PROGRAMACIÓN DE {entity.stationName.toUpperCase()}
                        </strong>

                        <Link to="new-broadcast">
                            <button className="new__broadcast_button">
                                Nuevo programa
                            </button>
                        </Link>
                    </span>
                )}

                <Table
                    dispatch={dispatch}
                    radioStationStore={radioStationStore}
                />
            </div>
        </div>
    );
};

export default RadioStation;
