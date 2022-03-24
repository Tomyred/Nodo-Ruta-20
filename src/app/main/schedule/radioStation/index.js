import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RadioDialog from "./dialog";
import { loadRadioById, loadRadioNames } from "./store/actions";
import Table from "./table";

const RadioStation = () => {
    const dispatch = useDispatch();
    const radioStationStore = useSelector(store => store.schedule.radioStation);

    const [radioStationId, setRadioStationId] = useState("");

    const [open, setOpen] = useState(false);
    useEffect(() => {
        if (radioStationStore.namesLoaded === false) {
            dispatch(loadRadioNames());
        }
        if (radioStationStore.saved && radioStationId) {
            dispatch(loadRadioById(radioStationId));
        }
        // eslint-disable-next-line
    }, [radioStationStore.namesLoaded, radioStationStore.saved]);

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

    return (
        <div className="radio__component">
            {open === false ? (
                ""
            ) : (
                <RadioDialog dispatch={dispatch} setOpen={setOpen} />
            )}

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
                <select
                    defaultValue=""
                    onChange={e => {
                        getRadioStation(e.target.value);
                    }}
                >
                    <option value="">Elija una estación</option>
                    {selectContent}
                </select>
                <span className="schedule__title">
                    <strong>PROGRAMACIÓN</strong>
                </span>
                <Table radioStationStore={radioStationStore} />
            </div>
        </div>
    );
};

export default RadioStation;
