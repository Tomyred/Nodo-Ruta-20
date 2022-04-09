import React from "react";
import Collapsible from "react-collapsible";
import { Link } from "react-router-dom";
import navigationConfig from "../../config/navigationConfig";

const Navigation = props => {
    const [open, setOpen] = React.useState(false);

    const handleClick = element => {
        setOpen({ ...open, [element]: !open[element] });
    };

    const closeNav = () => {
        if (props.setOpen) {
            props.setOpen(false);
        }
    };

    const setNavigation = routes => {
        return routes.map(element => {
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
                        {element.children.map(child => {
                            if (child.type === "collapse") {
                                return (
                                    <Collapsible
                                        open={open[child.title]}
                                        key={child.title}
                                        trigger={
                                            <span
                                                className="navigation__title father"
                                                onClick={() =>
                                                    handleClick(child.title)
                                                }
                                            >
                                                <div>
                                                    <span
                                                        style={{
                                                            marginRight: "10px",
                                                        }}
                                                        className="material-icons md-36"
                                                    >
                                                        {child.icon}
                                                    </span>
                                                    {child.title}
                                                </div>

                                                {open[child.title] ? (
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
                                        {setNavigation(child.children)}
                                    </Collapsible>
                                );
                            } else {
                                return (
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
                                );
                            }
                        })}
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
        });
    };

    return (
        <nav className="navigation">
            <div className="session_options">
                <Link className="session_option" to="/settings">
                    Configuración
                </Link>
                <Link className="session_option" to="/">
                    Cerrar sesión
                </Link>
            </div>
            {setNavigation(navigationConfig)}
        </nav>
    );
};

export default Navigation;
