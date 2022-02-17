import React, { useState } from "react";
import Collapsible from "react-collapsible";
import Navigation from "./navigation";

const SmallSidebar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="top__container">
            <div className="top__navbar">
                <i
                    className="fa-solid fa-bars menu__icon"
                    onClick={() => setOpen(!open)}
                ></i>
            </div>
            <Collapsible open={open}>
                <div className="nav__page grid__center">
                    <Navigation setOpen={setOpen} />
                </div>
            </Collapsible>
        </div>
    );
};

export default SmallSidebar;
