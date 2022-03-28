import React from "react";
import LoadingScreen from "../../../pages/loadingScreen";
import { removeBroadcast } from "./store/actions";

const Table = ({ radioStationStore, dispatch }) => {
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

    const componentContent = () => {
        if (radioStationStore.loading) {
            return <LoadingScreen />;
        } else if (radioStationStore.loadingError) {
            return <h3 style={{ marginTop: 20 }}>No hay datos</h3>;
        } else if (radioStationStore.entity === null) {
            return <h3 style={{ marginTop: 20 }}>No hay datos</h3>;
        } else {
            return sortByWeekDays().map((element, i) => {
                return (
                    <table key={i} className="schedule__table">
                        <thead>
                            <tr>
                                <th id="day">
                                    {element.day.toLocaleUpperCase()}
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
                                            <td>
                                                <span
                                                    style={{
                                                        marginRight: "10px",
                                                    }}
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
                                                    style={{
                                                        marginRight: "10px",
                                                    }}
                                                    className="material-icons md-36 action__button"
                                                >
                                                    edit
                                                </span>
                                            </td>
                                        </tr>
                                    );
                                }
                            )}
                        </tbody>
                    </table>
                );
            });
        }
    };

    const component = componentContent();

    return <>{component}</>;
};

export default Table;
