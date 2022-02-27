import React from "react";
import { Controller, useForm } from "react-hook-form";
import Modal from "react-modal/lib/components/Modal";
import { useDispatch } from "react-redux";
import FORM_COLORS from "../formColors";
import { saveLink } from "../store/actions";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
    title: yup
        .string()
        .required("Este campo es requerido")
        .max(30, "Límite de caracteres superado"),
    description: yup
        .string()
        .required("Este campo es requerido")
        .max(120, "Límite de caracteres superado"),
    url: yup.string().required("Este campo es requerido"),
    color: yup.string(),
});

const DialogForm = ({ setOpen, group }) => {
    const dispatch = useDispatch();
    function closeModal() {
        reset();
        setOpen(false);
    }

    const defaultValues = { group };

    const { reset, formState, control, getValues } = useForm({
        defaultValues,
        mode: "onChange",
        resolver: yupResolver(schema),
    });

    const { isValid, errors } = formState;

    const handleClick = () => {
        dispatch(saveLink(getValues()));
        closeModal();
    };

    return (
        <div className="modal__container">
            <Modal
                ariaHideApp={false}
                isOpen={true}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                className="modal"
            >
                <Controller
                    name="title"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <input
                            {...field}
                            type="text"
                            placeholder="Título"
                            className="form__element"
                        />
                    )}
                />
                <span className="error_message">
                    {errors.title ? errors.title.message : ""}
                </span>

                <Controller
                    name="description"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <input
                            {...field}
                            type="text"
                            placeholder="Descripción"
                            className="form__element"
                        />
                    )}
                />

                <span className="error_message">
                    {errors.description ? errors.description.message : ""}
                </span>

                <Controller
                    name="url"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <input
                            {...field}
                            type="text"
                            placeholder="Enlace"
                            className="form__element"
                        />
                    )}
                />

                <span className="error_message">
                    {errors.url ? errors.url.message : ""}
                </span>

                <Controller
                    name="color"
                    control={control}
                    defaultValue="#2196f3"
                    render={({ field }) => (
                        <select {...field} className="form__element">
                            {FORM_COLORS.map((color, i) => (
                                <option {...field} key={i} value={color.value}>
                                    {color.name}
                                </option>
                            ))}
                        </select>
                    )}
                />

                <button
                    className="send__button"
                    disabled={!isValid}
                    type="submit"
                    onClick={handleClick}
                >
                    Enviar
                </button>
            </Modal>
        </div>
    );
};

export default DialogForm;
