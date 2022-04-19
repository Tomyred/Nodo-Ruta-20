import React, { useState } from "react";
import LoadingScreen from "../../../pages/loadingScreen";
import BroadcastDetail from "./broadcastDetail";
import { removeBroadcast, setBroadcast } from "./store/actions";
import { useNavigate } from "react-router";

const Table = ({ radioStationStore, dispatch }) => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const closeModal = () => {
        setOpen(false);
    };

    const sortByWeekDays = () => {
        const map = {
            Lunes: 1,
            Martes: 2,
            Miercoles: 3,
            Jueves: 4,
            Viernes: 5,
            Sabado: 6,
            Domingo: 7,
        };
        const sorted = radioStationStore.entity.schedule.sort((a, b) => {
            return map[a.day] - map[b.day];
        });
        return sorted;
    };

    const sortByTime = array => {
        const sorted = array.sort((a, b) => {
            return a.hour.slice(0, 2) - b.hour.slice(0, 2);
        });
        return sorted;
    };

    const deleteBroadcast = (broadcast, day) => {
        dispatch(removeBroadcast(broadcast, day, radioStationStore.entity._id));
    };

    const showDetail = (broadcast, day) => {
        dispatch(setBroadcast(broadcast));
        setOpen(true);
    };

    const editClickHandler = (broadcast, day) => {
        dispatch(setBroadcast(broadcast, day));
        navigate(`edit-broadcast/${day}/${broadcast._id}`);
    };

    if (radioStationStore.loading) {
        return <LoadingScreen />;
    }

    if (radioStationStore.loadingError) {
        return <h3 style={{ marginTop: 20 }}>No hay datos</h3>;
    }

    if (radioStationStore.entity === null) {
        return <h3 style={{ marginTop: 20 }}>No hay datos</h3>;
    }

    return sortByWeekDays().map((element, i) => {
        return (
            <div
                style={{
                    width: "100%",
                }}
                key={i}
            >
                {open === false ? (
                    ""
                ) : (
                    <BroadcastDetail
                        radioStationStore={radioStationStore}
                        closeModal={closeModal}
                    />
                )}
                {element.broadcasts.length === 0 ? (
                    ""
                ) : (
                    <table className="schedule__table">
                        <thead>
                            <tr>
                                <th id="daycell">
                                    {element.day.toUpperCase()}
                                </th>
                                <th> PROGRAMAS </th>
                                <th> CONDUCTORES/AS </th>
                                <th id="actions">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortByTime(element.broadcasts).map(
                                (broadcast, j) => {
                                    return (
                                        <tr key={j}>
                                            <td> {broadcast.hour} </td>
                                            <td> {broadcast.name} </td>
                                            <td>
                                                {broadcast.hosts.map(
                                                    (host, i) => {
                                                        if (
                                                            i + 1 <
                                                            broadcast.hosts
                                                                .length
                                                        ) {
                                                            return `${host}, `;
                                                        } else {
                                                            return host;
                                                        }
                                                    }
                                                )}
                                            </td>
                                            <td className="action__cell">
                                                <span
                                                    className="material-icons md-36 action__button"
                                                    onClick={() =>
                                                        deleteBroadcast(
                                                            broadcast,
                                                            element.day
                                                        )
                                                    }
                                                >
                                                    delete
                                                </span>
                                                <span
                                                    onClick={() =>
                                                        editClickHandler(
                                                            broadcast,
                                                            element.day
                                                        )
                                                    }
                                                    className="material-icons md-36 action__button"
                                                >
                                                    edit
                                                </span>
                                                <span
                                                    onClick={() =>
                                                        showDetail(
                                                            broadcast,
                                                            element.day
                                                        )
                                                    }
                                                    className="material-icons md-36 action__button"
                                                >
                                                    search
                                                </span>
                                            </td>
                                        </tr>
                                    );
                                }
                            )}
                        </tbody>
                    </table>
                )}
            </div>
        );
    });
};

export default Table;
