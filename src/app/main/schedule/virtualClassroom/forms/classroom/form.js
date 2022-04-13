import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { createClassroom } from "../../store/actions";
import { useDispatch } from "react-redux";

const schema = yup.object().shape({
    classroomName: yup.string().required("Este campo es requerido"),
    day: yup.string().required("Este campo es requerido"),
    hour: yup.string().required("Este campo es requerido"),
    name: yup.string().required("Este campo es requerido"),
    description: yup.string(),
    reference: yup.string(),
});

const Form = ({ submit, setSubmit, setDisable }) => {
    const dispatch = useDispatch();

    const defaultValues = {};
    const [host, setHost] = useState("");
    const [hosts, setHosts] = useState([]);

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
        const { classroomName, day, hour, name, description, reference } =
            getValues();
        const newClassroom = {
            classroomName,
            reference,
            type: "virtual",
            schedule: [{ day, courses: [{ hour, name, hosts, description }] }],
        };
        dispatch(createClassroom(newClassroom));
    };

    return (
        <div className="form__container">
            <label htmlFor="classroomName"> Nombre del aula </label>
            <Controller
                name="classroomName"
                control={control}
                defaultValue=""
                render={({ field }) => {
                    return (
                        <input
                            {...field}
                            id="classroomName"
                            type="text"
                            className="form__element"
                        />
                    );
                }}
            />
            <span className="error_message">
                {errors.classroomName ? errors.classroomName.message : ""}
            </span>
            <label htmlFor="reference"> Dirección (URL o fisica) </label>
            <Controller
                name="reference"
                control={control}
                defaultValue=""
                render={({ field }) => {
                    return (
                        <input
                            id="reference"
                            {...field}
                            type="text"
                            className="form__element"
                        />
                    );
                }}
            />
            <span
                style={{
                    marginTop: 10,

                    display: "block",
                }}
            >
                Crear con al menos un curso
            </span>
            <hr style={{ marginBottom: 10 }} />
            <div className="short__elements">
                <div>
                    <label htmlFor="day"> Dia </label>
                    <Controller
                        name="day"
                        control={control}
                        defaultValue="Lunes"
                        render={({ field }) => {
                            return (
                                <select
                                    {...field}
                                    name=""
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
                    <label>Horario</label>
                    <Controller
                        name="hour"
                        control={control}
                        defaultValue=""
                        render={({ field }) => {
                            return (
                                <input
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
            <label>Nombre del curso</label>
            <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field }) => {
                    return (
                        <input
                            {...field}
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
            <label htmlFor="hosts">Instructores</label>
            <div className="host__field">
                <input
                    onChange={e => setHost(e.target.value)}
                    type="text"
                    value={host}
                    className="form__element"
                />
                <span className="error_message">
                    {hosts.length === 0
                        ? "Debe contener al menos un conductor/a"
                        : ""}
                </span>
                <button onClick={addToHostList}> + </button>
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
