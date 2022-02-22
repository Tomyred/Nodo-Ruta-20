import React from "react";

const SettingsNavigation = ({ setTabValue }) => {
    return (
        <div className="config__navigation">
            <h3>Configuración</h3>
            <span onClick={() => setTabValue(0)} className="config__element">
                General
            </span>
            <span onClick={() => setTabValue(1)} className="config__element">
                Información personal
            </span>
            <span onClick={() => setTabValue(2)} className="config__element">
                Seguridad
            </span>
        </div>
    );
};

export default SettingsNavigation;
