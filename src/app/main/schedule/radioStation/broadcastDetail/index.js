import React from "react";
import Modal from "react-modal/lib/components/Modal";

const BroadcastDetail = ({ radioStationStore, closeModal }) => {
    const { broadcast } = radioStationStore;

    return (
        <Modal
            ariaHideApp={false}
            isOpen={true}
            onRequestClose={closeModal}
            className="modal"
        >
            <div>
                <h3>{broadcast.name}</h3>
                <h4>Conductores</h4>
                <p>
                    {broadcast.hosts.map((host, i) => {
                        if (i + 1 < broadcast.hosts.length) {
                            return `${host}, `;
                        } else {
                            return host;
                        }
                    })}
                </p>
                <h4>Descripción</h4>
                <p>
                    {!broadcast.description ||
                    broadcast.description.length === 0
                        ? "Sin descripcion"
                        : broadcast.description}
                </p>
            </div>
        </Modal>
    );
};

export default BroadcastDetail;
