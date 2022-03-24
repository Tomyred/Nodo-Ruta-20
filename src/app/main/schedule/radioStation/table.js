import React from "react";
import LoadingScreen from "../../../pages/loadingScreen";

const Table = ({ radioStationStore }) => {
    const componentContent = () => {
        if (radioStationStore.loading) {
            return <LoadingScreen />;
        } else if (radioStationStore.loadingError) {
            alert("Ha ocurrido un error al cargar los datos");
            return <h3 style={{ marginTop: 20 }}>No hay datos</h3>;
        } else if (radioStationStore.entity === null) {
            return <h3 style={{ marginTop: 20 }}>No hay datos</h3>;
        } else {
            return radioStationStore.entity.schedule.map((element, i) => {
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
