import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { addCourse, editCourse } from "../../store/actions";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const schema = yup.object().shape({
    day: yup.string().required("Este campo es requerido"),
    hour: yup.string().required("Este campo es requerido"),
    name: yup.string().required("Este campo es requerido"),
    description: yup.string(),
});

const Form = ({ submit, setSubmit, setDisable, dispatch }) => {
    const { id, elmDay } = useParams();
    const { entity, course } = useSelector(store => store.schedule.v_classroom);
    const [host, setHost] = useState("");
    const [hosts, setHosts] = useState(id && course?.hosts ? course.hosts : []);
    const defaultValues = id ? course : { day: "Lunes" };
    const { formState, control, getValues } = useForm({
        defaultValues,
        mode: "onChange",
        resolver: yupResolver(schema),
    });
    const { isValid, errors } = formState;
    useEffect(() => {
        if (isValid && hosts.length > 0) {
            setDisable(true);
        } else {
            setDisable(false);
        }
        if (submit === true) {
            handleSubmit();
            setSubmit(false);
        }
        //eslint-disable-next-line
    }, [isValid, hosts.length, submit]);

    const addToHostList = () => {
        setHosts([...hosts, host]);
        setHost("");
    };
    const removeHost = i => {
        hosts.splice(i, 1);
        setHosts([...hosts]);
    };

    const handleSubmit = () => {
        if (id) {
            const { day, hour, name, description, _id } = getValues();
            const courseToUpdate = { hour, name, description, hosts, _id, day };
            dispatch(editCourse(courseToUpdate, elmDay, entity._id));
        } else {
            const { day, hour, name, description } = getValues();
            const newCourse = {
                day,
                courses: [{ hour, name, hosts, description }],
            };

            dispatch(addCourse(newCourse, entity._id));
        }
    };
    if (!entity) {
        return <p>No hay un aula seleccionada</p>;
    }

    return (
        <div className="form__container">
            <span>
                Agregar programa a: <strong>{entity.classroomName}</strong>
            </span>
            <div className="short__elements">
                <div>
                    <label htmlFor="day"> Dia </label>
                    <Controller
                        name="day"
                        control={control}
                        render={({ field }) => {
                            return (
                                <select
                                    id="day"
                                    {...field}
                                    className="form__element"
                                >
                                    <option {...field} value="Lunes">
                                        Lunes
                                    </option>
                                    <option {...field} value="Martes">
                                        Martes
                                    </option>
                                    <option {...field} value="Miercoles">
                                        Miercoles
                                    </option>
                                    <option {...field} value="Jueves">
                                        Jueves
                                    </option>
                                    <option {...field} value="Viernes">
                                        Viernes
                                    </option>
                                    <option {...field} value="Sabado">
                                        Sabado
                                    </option>
                                    <option {...field} value="Domingo">
                                        Domingo
                                    </option>
                                </select>
                            );
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="hour">Horario</label>
                    <Controller
                        name="hour"
                        control={control}
                        defaultValue=""
                        render={({ field }) => {
                            return (
                                <input
                                    id="hour"
                                    {...field}
                                    type="time"
                                    className="form__element"
                                />
                            );
                        }}
                    />
                    <span className="error_message">
                        {errors.hour ? errors.hour.message : ""}
                    </span>
                </div>
            </div>

            <label htmlFor="name">Nombre del curso</label>
            <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field }) => {
                    return (
                        <input
                            {...field}
                            id="name"
                            type="text"
                            className="form__element"
                        />
                    );
                }}
            />
            <span className="error_message">
                {errors.name ? errors.name.message : ""}
            </span>
            <label htmlFor="description">Descripción</label>
            <Controller
                name="description"
                control={control}
                defaultValue=""
                render={({ field }) => {
                    return (
                        <textarea
                            {...field}
                            className="form__element"
                            cols="30"
                            rows="10"
                            id="description"
                        ></textarea>
                    );
                }}
            />

            <label htmlFor="hosts">Instructor</label>
            <div className="host__field">
                <input
                    onChange={e => setHost(e.target.value)}
                    type="text"
                    value={host}
                    id="hosts"
                    className="form__element"
                />
                <span className="error_message">
                    {hosts.length === 0
                        ? "Debe contener al menos un instructor/a"
                        : ""}
                </span>
                <button disabled={host.length === 0} onClick={addToHostList}>
                    +
                </button>
                <div className="hosts__container">
                    {hosts.map((host, i) => {
                        return (
                            <div
                                onClick={() => removeHost(i)}
                                key={i}
                                className="hostslists__element"
                            >
                                <span>{host}</span>
                                <span className="material-icons md-36">
                                    delete
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Form;
