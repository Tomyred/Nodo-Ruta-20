import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RadioDialog from "./dialog";
import {
    deleteRadioStation,
    loadRadioById,
    loadRadioNames,
} from "./store/actions";
import Table from "./table";
import Modal from "react-modal/lib/components/Modal";
import LoadingScreen from "../../../pages/loadingScreen";

const RadioStation = () => {
    const dispatch = useDispatch();
    const radioStationStore = useSelector(store => store.schedule.radioStation);

    const [radioStationId, setRadioStationId] = useState("");
    const [open, setOpen] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    useEffect(() => {
        if (radioStationStore.namesLoaded === false) {
            dispatch(loadRadioNames());
        }
        if (radioStationStore.namesLoaded === false) {
            dispatch(loadRadioNames());
        }
        if (radioStationStore.saved && radioStationId) {
            dispatch(loadRadioById(radioStationId));
        }
        if (radioStationStore.deleted === true && radioStationId) {
            dispatch(loadRadioById(radioStationId));
        }
        // eslint-disable-next-line
    }, [
        radioStationStore.namesLoaded,
        radioStationStore.saved,
        radioStationStore.deleted,
    ]);

    const getRadioStation = id => {
        setRadioStationId(id);
        if (!id) {
            return;
        }

        dispatch(loadRadioById(id));
    };
    const setSelectContent = () => {
        if (
            radioStationStore.namesLoaded &&
            radioStationStore.radioNames.length === 0
        ) {
            return <option value="">No hay datos</option>;
        }
        if (radioStationStore.radioNames.length > 0) {
            return radioStationStore.radioNames.map((station, i) => {
                return (
                    <option key={i} value={station._id}>
                        {station.stationName}
                    </option>
                );
            });
        }

        if (radioStationStore.namesLoading) {
            return <option value=""> Cargando... </option>;
        }

        if (radioStationStore.namesLoadingError) {
            return <option value=""> Error cargando las estaciones </option>;
        }
    };

    const selectContent = setSelectContent();
    const deleteConfirmationModal =
        radioStationStore.entity === null ? (
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
                    ¿Seguro que quieres eliminar la emisora{" "}
                    <strong> {radioStationStore.entity.stationName}</strong>?
                </p>
                <div>
                    <button
                        onClick={() =>
                            dispatch(
                                deleteRadioStation(radioStationStore.entity._id)
                            )
                        }
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

    if (
        radioStationStore.deletingStation === true ||
        radioStationStore.loading
    ) {
        <LoadingScreen />;
    }
    return (
        <div className="radio__component">
            {open === false ? (
                ""
            ) : (
                <RadioDialog
                    radioStationStore={radioStationStore}
                    dispatch={dispatch}
                    setOpen={setOpen}
                />
            )}

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
                <button onClick={() => setOpen(true)}>Nuevo</button>

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
                        onClick={() => {
                            if (!radioStationStore.entity) {
                                alert("No hay una emisora seleccionada");
                            } else {
                                setDeleteModal(true);
                            }
                        }}
                    >
                        Eliminar estación
                    </button>
                </div>

                <span className="radio__title">
                    <strong>PROGRAMACIÓN</strong>
                </span>
                <Table
                    dispatch={dispatch}
                    radioStationStore={radioStationStore}
                />
            </div>
        </div>
    );
};

export default RadioStation;
