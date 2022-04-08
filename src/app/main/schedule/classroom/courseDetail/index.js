import React from "react";
import Modal from "react-modal/lib/components/Modal";

const CourseDetail = ({ classroomStore, closeModal }) => {
    const { course } = classroomStore;

    return (
        <Modal
            ariaHideApp={false}
            isOpen={true}
            onRequestClose={closeModal}
            className="modal"
        >
            <div>
                <h3>{course.name}</h3>
                <h4>Conductores</h4>
                <p>
                    {course.hosts.map((host, i) => {
                        if (i + 1 < course.hosts.length) {
                            return `${host}, `;
                        } else {
                            return host;
                        }
                    })}
                </p>
                <h4>Descripción</h4>
                <p>
                    {!course.description || course.description.length === 0
                        ? "Sin descripcion"
                        : course.description}
                </p>
            </div>
        </Modal>
    );
};

export default CourseDetail;
