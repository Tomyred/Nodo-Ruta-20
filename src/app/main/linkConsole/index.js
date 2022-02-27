import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import LoadingScreen from "../../pages/loadingScreen";
import Card from "./card";
import DialogForm from "./dialog/form";
import { loadLinks, removeLink, setEntityToEdit } from "./store/actions";

const LinkConsole = ({ group, title }) => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const links = useSelector(store => store.linkConsole.data);
    const loading = useSelector(store => store.linkConsole.loading);
    const saved = useSelector(store => store.linkConsole.saved);
    const deleted = useSelector(store => store.linkConsole.deleted);

    useEffect(() => {
        dispatch(loadLinks(group));
        // eslint-disable-next-line
    }, [group]);

    useEffect(() => {
        if (saved) {
            dispatch(loadLinks(group));
        }
        if (deleted) {
            window.location.reload();
        }
        // eslint-disable-next-line
    }, [saved, deleted]);

    const setEntity = entity => {
        dispatch(setEntityToEdit(entity));
        setOpen(true);
    };

    const deleteCard = id => {
        dispatch(removeLink(id));
    };

    const handleKeyUp = e => {
        let typingTimer;
        const searchText = e.target.value;

        clearTimeout(typingTimer);

        typingTimer = setTimeout(() => {
            dispatch(loadLinks(group, searchText));
        }, 1000);
    };

    const cards =
        links.length === 0 ||
        links.filter(link =>
            link.group.toLowerCase().includes(group.toLowerCase())
        ).length === 0 ? (
            <h3 className="grid__center">No hay datos</h3>
        ) : (
            links.map((link, i) => {
                return (
                    <Card
                        key={i}
                        index={i}
                        link={link}
                        deleteCard={deleteCard}
                        setEntity={setEntity}
                    />
                );
            })
        );

    return (
        <div>
            {open === false ? (
                ""
            ) : (
                <DialogForm
                    group={group}
                    setOpen={setOpen}
                    dispatch={dispatch}
                />
            )}
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
                        <h2>{title}</h2>
                        <p>Consola de enlaces</p>
                    </motion.div>
                </div>
                <hr />
                <div className="button__container">
                    <input onKeyUp={e => handleKeyUp(e)} />
                    <button onClick={() => setOpen(true)}>Nuevo enlace</button>
                </div>
                <div className="card__container">
                    {loading ? <LoadingScreen /> : cards}
                </div>
            </div>
        </div>
    );
};

export default LinkConsole;
