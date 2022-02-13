import React from "react";
import Modal from "react-modal/lib/components/Modal";

const DialogForm = ({ open, setOpen }) => {
    function closeModal() {
        setOpen(false);
    }

    return (
        <div className="modal__container">
            <Modal
                isOpen={open}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                className="modal"
            >
                <input type="text" placeholder="Título" />
                <input type="text" placeholder="Descripción" />
                <input type="text" placeholder="Enlace" />
                <input type="text" placeholder="Color" />
                <button>Enviar</button>
            </Modal>
        </div>
    );
};

export default DialogForm;
