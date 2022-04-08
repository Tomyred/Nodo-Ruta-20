import React, { useState } from "react";
import Collapsible from "react-collapsible";
import Navigation from "./navigation";

const SmallSidebar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className="top__container">
            <div className="top__navbar">
                <span
                    className="material-icons md-36 menu__icon"
                    onClick={() => setOpen(!open)}
                >
                    menu
                </span>
            </div>
            <Collapsible className="nav__collapse" open={open}>
                <div className="nav__page">
                    <Navigation setOpen={setOpen} />
                </div>
            </Collapsible>
        </nav>
    );
};

export default SmallSidebar;
