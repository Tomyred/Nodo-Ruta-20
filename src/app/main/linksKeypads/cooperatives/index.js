import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import LoadingScreen from "../../../pages/loadingScreen";
import Card from "./card";
import DialogForm from "./dialog/form";
import { loadLinks, removeLink } from "./store/actions";

const CooperativesKeypad = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const links = useSelector(store => store.keypadsReducer.cooperatives.data);
    const loaded = useSelector(
        store => store.keypadsReducer.cooperatives.loaded
    );
    const loading = useSelector(
        store => store.keypadsReducer.cooperatives.loading
    );
    const saved = useSelector(store => store.keypadsReducer.cooperatives.saved);
    const deleted = useSelector(
        store => store.keypadsReducer.cooperatives.deleted
    );

    useEffect(() => {
        if (loaded === false) {
            dispatch(loadLinks());
        }
        if (saved) {
            dispatch(loadLinks());
        }
        if (deleted) {
            window.location.reload();
        }
        // eslint-disable-next-line
    }, [saved, deleted]);

    const deleteCard = id => {
        dispatch(removeLink(id));
    };

    const cards =
        links.length === 0 ? (
            <h3 className="grid__center">No hay datos</h3>
        ) : (
            links.map((link, i) => {
                return (
                    <Card
                        key={i}
                        index={i}
                        link={link}
                        deleteCard={deleteCard}
                    />
                );
            })
        );

    return (
        <div>
            <DialogForm open={open} setOpen={setOpen} />
            <div>
                <div className="header">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.2 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            transition: { delay: 0.5 },
                        }}
                    >
                        <h2>cooperativesos</h2>
                        <p>Consola de enlaces</p>
                    </motion.div>
                </div>
                <hr />
                <div className="button__container">
                    <button onClick={() => setOpen(true)}>Nuevo enlace</button>
                </div>
                <div className="card__container">
                    {loading ? <LoadingScreen /> : cards}
                </div>
            </div>
        </div>
    );
};

export default CooperativesKeypad;
