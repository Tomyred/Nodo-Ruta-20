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
                            : "https://i.pinimg.com/736x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg"
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
