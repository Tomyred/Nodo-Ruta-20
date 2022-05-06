import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import LoadingScreen from "../../pages/loadingScreen";
import Card from "./card";
import DialogForm from "./dialog/form";
import { loadLinks, removeLink, setEntityToEdit } from "./store/actions";

let typingTimer;

const LinkConsole = ({ dispatch, store }) => {
    const [open, setOpen] = useState(false);

    const { data, loading } = store.linkConsole.loadLinksReducer;
    const saved = store.linkConsole.saveLinkReducer.saved;
    const deleted = store.linkConsole.deleteLinkReducer.deleted;
    const { group, title } = useParams();

    useEffect(() => {
        if (saved) {
            dispatch(loadLinks(group));
        }
    }, [saved, dispatch, group]);

    useEffect(() => {
        dispatch(loadLinks(group));
    }, [dispatch, group]);

    useEffect(() => {
        if (deleted) {
            dispatch(loadLinks(group));
        }
    }, [deleted, dispatch, group]);

    const setEntity = entity => {
        dispatch(setEntityToEdit(entity));
        setOpen(true);
    };

    const deleteCard = id => {
        dispatch(removeLink(id));
    };

    const handleKeyUp = e => {
        const searchText = e.target.value;

        clearTimeout(typingTimer);

        typingTimer = setTimeout(() => {
            dispatch(loadLinks(group, searchText));
        }, 1000);
    };

    const cards =
        data.length === 0 ||
        data.filter(link =>
            link.group.toLowerCase().includes(group.toLowerCase())
        ).length === 0 ? (
            <h3 className="grid__center">No hay datos</h3>
        ) : (
            data.map((link, i) => {
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
                    store={store}
                />
            )}
            <div>
                <div className="header">
                    <div
                        initial={{ opacity: 0, scale: 0.2 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            transition: { delay: 0.5 },
                        }}
                    >
                        <h2>{title}</h2>
                        <p>Consola de enlaces</p>
                    </div>
                </div>
                {/* <hr /> */}
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
