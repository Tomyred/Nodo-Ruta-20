import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Form from "./form";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "../../../../../pages/loadingScreen";

const Station = ({ store, dispatch }) => {
    const [disable, setDisable] = useState(false);
    const [submit, setSubmit] = useState(false);
    const { saved, saving } = store.schedule.classroom.saved;
    const navigate = useNavigate();

    useEffect(() => {
        if (saved === true) {
            navigate(-1);
        }
    }, [saved, navigate]);

    if (saving) {
        return <LoadingScreen />;
    }

    return (
        <div className="form__component">
            <div className="station__header">
                <Link className="go__back_link" to="/schedule/classroom">
                    <span className="material-icons md-36">arrow_back</span>
                    Regresar
                </Link>
                <button
                    onClick={() => setSubmit(true)}
                    className="submit__button"
                    disabled={!disable}
                >
                    Enviar
                </button>
            </div>
            <Form
                submit={submit}
                setSubmit={setSubmit}
                setDisable={setDisable}
                dispatch={dispatch}
            />
        </div>
    );
};

export default Station;
