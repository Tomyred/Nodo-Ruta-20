import React from "react";
import LoadingScreen from "../../../pages/loadingScreen";

const Table = ({ radioStationStore }) => {
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
                            </tr>
                        </thead>
                        <tbody>
                            {element.broadcasts.map((broadcast, j) => {
                                return (
                                    <tr
                                        key={j}
                                        onClick={() => console.log(broadcast)}
                                    >
                                        <td> {broadcast.hour} </td>
                                        <td> {broadcast.name} </td>
                                        <td>
                                            {broadcast.hosts.map((host, i) => {
                                                if (
                                                    i + 1 <
                                                    broadcast.hosts.length
                                                ) {
                                                    return `${host}, `;
                                                } else {
                                                    return host;
                                                }
                                            })}
                                        </td>
                                    </tr>
                                );
                            })}
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
