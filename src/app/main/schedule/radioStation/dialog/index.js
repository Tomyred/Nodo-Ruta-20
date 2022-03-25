import React, { useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import BroadcastForm from "./broadcastForm";
import StationForm from "./stationForm";

const RadioDialog = ({ radioStationStore, setOpen, dispatch }) => {
    const [tabValue, setTabValue] = useState(0);
    const entity = radioStationStore.entity;

    const closeModal = () => {
        setOpen(false);
    };

    const renderComponent = () => {
        if (tabValue === 0 && entity) {
            return (
                <BroadcastForm
                    dispatch={dispatch}
                    entity={entity}
                    closeModal={closeModal}
                />
            );
        } else {
            return <StationForm dispatch={dispatch} closeModal={closeModal} />;
        }
    };

    const component = renderComponent();

    return (
        <div>
            <Modal
                ariaHideApp={false}
                isOpen={true}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                className="radio__modal"
            >
                <div className="modal__tabs">
                    <strong onClick={() => setTabValue(0)}>
                        Nuevo programa
                    </strong>
                    <strong onClick={() => setTabValue(1)}>
                        Nueva emisora
                    </strong>
                </div>
                <div className="modal__body">{component}</div>
            </Modal>
        </div>
    );
};

export default RadioDialog;
