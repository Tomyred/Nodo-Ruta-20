import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const LoadingScreen = () => {
    const override = `
        border: 5px solid #00ffff;
    `;
    return (
        <div className="loading__screen grid__center">
            <h2 className="soft__text">Cargando...</h2>
            <ClipLoader
                color={"#00ffff"}
                loading={true}
                size={150}
                css={override}
                speedMultiplier={0.7}
            />
        </div>
    );
};

export default LoadingScreen;
