import React from "react";
import Collapsible from "react-collapsible";
import { Link } from "react-router-dom";
import navigationConfig from "../../config/navigationConfig";

const Navigation = props => {
    const [open, setOpen] = React.useState(false);

    const handleClick = element => {
        setOpen({ [element]: !open[element] });
    };

    const closeNav = () => {
        if (props.setOpen) {
            props.setOpen(false);
        }
    };

    return (
        <div className="navigation">
            <div className="session_options">
                <Link className="session_option" to="/settings">
                    Configuración
                </Link>
                <Link className="session_option" to="/">
                    Cerrar sesión
                </Link>
            </div>
            {navigationConfig.map(element => {
                if (element.type === "collapse") {
                    return (
                        <Collapsible
                            open={open[element.title]}
                            key={element.title}
                            trigger={
                                <span
                                    className="navigation__title father"
                                    onClick={() => handleClick(element.title)}
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
                                    onClick={closeNav}
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
                                    onClick={closeNav}
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
    );
};

export default Navigation;
