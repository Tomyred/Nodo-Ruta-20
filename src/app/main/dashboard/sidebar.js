import { motion } from "framer-motion";
import React from "react";
import Navigation from "./navigation";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <motion.h1
                style={{ textAlign: "center" }}
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    transition: { delay: 1 },
                }}
            >
                Nodo: Ruta 20
            </motion.h1>
            <div className="user__info">
                <img
                    className="profile__image"
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="profile_pic"
                />
                <h3>John Doe</h3>
            </div>

            <div>
                <Navigation />
            </div>
        </div>
    );
};

export default Sidebar;
