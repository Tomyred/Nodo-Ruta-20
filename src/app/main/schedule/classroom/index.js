import React from "react";

const Classroom = () => {
    return (
        <div className="classroom__component">
            <div
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    transition: { delay: 0.5 },
                }}
                className="classroom__header"
            >
                <h2>Aulas</h2>
                <p>Horarios</p>
            </div>
        </div>
    );
};

export default Classroom;
