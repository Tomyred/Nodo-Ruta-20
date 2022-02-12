import { motion } from "framer-motion";
import React from "react";
import Collapsible from "react-collapsible";
import { Link } from "react-router-dom";
import navigationConfig from "../../config/navigationConfig";

const Sidebar = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = element => {
        setOpen({ [element]: !open[element] });
    };
    console.log(window.innerWidth);
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
                {navigationConfig.map(element => {
                    if (element.type === "collapse") {
                        return (
                            <Collapsible
                                open={open[element.title]}
                                key={element.title}
                                trigger={
                                    <span
                                        className="navigation__title father"
                                        onClick={() =>
                                            handleClick(element.title)
                                        }
                                    >
                                        <div>
                                            <i
                                                style={{ marginRight: "10px" }}
                                                className={element.icon}
                                            ></i>
                                            {element.title}
                                        </div>

                                        {open[element.title] ? (
                                            <i className="fa-solid fa-angle-up"></i>
                                        ) : (
                                            <i className="fa-solid fa-angle-down"></i>
                                        )}
                                    </span>
                                }
                            >
                                {element.children.map(child => (
                                    <Link
                                        key={child.title}
                                        className="navigation__title child"
                                        to={child.route}
                                    >
                                        <i
                                            style={{ marginRight: "10px" }}
                                            className={child.icon}
                                        ></i>
                                        {child.title}
                                    </Link>
                                ))}
                            </Collapsible>
                        );
                    } else {
                        return (
                            <div key={element.title}>
                                <span>
                                    <Link
                                        className="navigation__title"
                                        to={element.route}
                                    >
                                        <i
                                            style={{ marginRight: "10px" }}
                                            className={element.icon}
                                        ></i>
                                        {element.title}
                                    </Link>
                                </span>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default Sidebar;
