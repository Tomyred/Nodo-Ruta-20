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
                                        <span
                                            style={{ marginRight: "10px" }}
                                            className="material-icons md-36"
                                        >
                                            {element.icon}
                                        </span>
                                        {element.title}
                                    </div>

                                    {open[element.title] ? (
                                        <span className="material-icons md-36">
                                            expand_less
                                        </span>
                                    ) : (
                                        <span className="material-icons md-36">
                                            expand_more
                                        </span>
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
                                    <span
                                        style={{ marginRight: "10px" }}
                                        className="material-icons md-36"
                                    >
                                        {child.icon}
                                    </span>
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
                                    <span
                                        style={{ marginRight: "10px" }}
                                        className="material-icons md-36"
                                    >
                                        {element.icon}
                                    </span>
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
