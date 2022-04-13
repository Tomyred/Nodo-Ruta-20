import React, { useState } from "react";
import LoadingScreen from "../../../pages/loadingScreen";
import CourseDetail from "./courseDetail";
import { removeCourse, setCourse } from "./store/actions";
import { useNavigate } from "react-router";

const Table = ({ classroomStore, dispatch }) => {
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
        const sorted = classroomStore.entity.schedule.sort((a, b) => {
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

    const deleteCourse = (course, day) => {
        dispatch(removeCourse(course, day, classroomStore.entity._id));
    };

    const showDetail = (course, day) => {
        dispatch(setCourse(course));
        setOpen(true);
    };

    const editClickHandler = (course, day) => {
        dispatch(setCourse(course, day));
        navigate(`new-course/${course._id}`);
    };

    if (classroomStore.loading) {
        return <LoadingScreen />;
    }

    if (classroomStore.loadingError) {
        return <h3 style={{ marginTop: 20 }}>No hay datos</h3>;
    }

    if (classroomStore.entity === null) {
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
                    <CourseDetail
                        classroomStore={classroomStore}
                        closeModal={closeModal}
                    />
                )}
                <table className="schedule__table">
                    <thead>
                        <tr>
                            <th id="daycell">
                                {element.day.toLocaleUpperCase()}
                            </th>
                            <th> PROGRAMAS </th>
                            <th> INSTRUCTORES/AS </th>
                            <th id="actions">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortByTime(element.courses).map((course, j) => {
                            return (
                                <tr key={j}>
                                    <td> {course.hour} </td>
                                    <td> {course.name} </td>
                                    <td>
                                        {course.hosts.map((host, i) => {
                                            if (i + 1 < course.hosts.length) {
                                                return `${host}, `;
                                            } else {
                                                return host;
                                            }
                                        })}
                                    </td>
                                    <td className="action__cell">
                                        <span
                                            className="material-icons md-36 action__button"
                                            onClick={() =>
                                                deleteCourse(
                                                    course,
                                                    element.day
                                                )
                                            }
                                        >
                                            delete
                                        </span>
                                        <span
                                            onClick={() =>
                                                editClickHandler(
                                                    course,
                                                    element.day
                                                )
                                            }
                                            className="material-icons md-36 action__button"
                                        >
                                            edit
                                        </span>
                                        <span
                                            onClick={() =>
                                                showDetail(course, element.day)
                                            }
                                            className="material-icons md-36 action__button"
                                        >
                                            search
                                        </span>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    });
};

export default Table;
