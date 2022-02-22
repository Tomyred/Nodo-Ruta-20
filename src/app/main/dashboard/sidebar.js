import { motion } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";
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
                            : "https://www.pngfind.com/pngs/m/676-6764065_default-profile-picture-transparent-hd-png-download.png"
                    }
                    alt="profile_pic"
                />
                <h3>
                    {" "}
                    {user.firstName
                        ? `${user.firstName} ${user.lastName}`
                        : "John Doe"}{" "}
                </h3>
            </div>

            <div>
                <Navigation />
            </div>
        </div>
    );
};

export default Sidebar;
