import { motion } from "framer-motion";
import React, { useState } from "react";
import DialogForm from "./dialogForm";

const Keypad = () => {
    const [open, setOpen] = useState(false);
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

                <div className="component__container">
                    <button onClick={() => setOpen(true)}>Nuevo enlace</button>
                    <div className="card"></div>
                </div>
            </div>
        </div>
    );
};

export default Keypad;
