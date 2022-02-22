import { motion } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navigation from "./navigation";

const Sidebar = () => {
    const user = useSelector(store => store.userReducer.user);
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
                    src={
                        user.profilePic
                            ? user.profilePic
                            : "https://cdn.pixabay.com/photo/2016/11/30/17/10/web-1873373_1280.png"
                    }
                    alt="profile_pic"
                />
                <h3>
                    {" "}
                    {user.firstName
                        ? `${user.firstName} ${user.lastName}`
                        : "John Doe"}{" "}
                </h3>
                <div className="session_options">
                    <Link className="session_option" to="/settings">
                        Configuración
                    </Link>
                    <Link className="session_option" to="/">
                        Cerrar sesión
                    </Link>
                </div>
            </div>

            <div>
                <Navigation />
            </div>
        </div>
    );
};

export default Sidebar;
