import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Card from "./card";
import DialogForm from "./dialog/form";
import { loadLinks } from "./store/actions/keypadActions";

const Keypad = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const links = useSelector(store => store.keypad.data);
    const loaded = useSelector(store => store.keypad.loaded);
    const saved = useSelector(store => store.keypad.saved);

    useEffect(() => {
        if (loaded === false) {
            dispatch(loadLinks());
        }
        if (saved) {
            dispatch(loadLinks());
        }
        // eslint-disable-next-line
    }, [saved]);

    return (
        <div>
            <DialogForm open={open} setOpen={setOpen} />
            <div className="link_keypad__container">
                <div className="header">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            transition: { delay: 0.5 },
                        }}
                    >
                        <h2>Enlaces</h2>
                        <p>Consola de enlaces</p>
                    </motion.div>
                </div>

                <div className="button__container">
                    <button onClick={() => setOpen(true)}>Nuevo enlace</button>
                </div>
                <div className="card__container">
                    {links.map((link, i) => (
                        <Card key={i} link={link} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Keypad;
