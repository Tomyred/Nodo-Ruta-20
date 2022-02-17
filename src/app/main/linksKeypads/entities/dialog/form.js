import React from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal/lib/components/Modal";
import { useDispatch } from "react-redux";
import FORM_COLORS from "../../formColors";
import { saveLink } from "../store/actions";

const DialogForm = ({ open, setOpen }) => {
    const dispatch = useDispatch();
    function closeModal() {
        reset();
        setOpen(false);
    }

    const {
        register,
        handleSubmit,
        reset,
        // watch,
        // formState: { errors },
    } = useForm();

    const onSubmit = data => {
        dispatch(saveLink(data));
        closeModal();
    };

    return (
        <div className="modal__container">
            <Modal
                ariaHideApp={false}
                isOpen={open}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                className="modal"
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        placeholder="Título"
                        className="form__element"
                        {...register("title")}
                    />
                    <input
                        type="text"
                        placeholder="Descripción"
                        className="form__element"
                        {...register("description")}
                    />
                    <input
                        type="text"
                        placeholder="Enlace"
                        className="form__element"
                        {...register("url")}
                    />
                    <select className="form__element" {...register("color")}>
                        {FORM_COLORS.map((color, i) => (
                            <option key={i} value={color.value}>
                                {color.name}
                            </option>
                        ))}
                    </select>
                    <button type="submit">Enviar</button>
                </form>
            </Modal>
        </div>
    );
};

export default DialogForm;
