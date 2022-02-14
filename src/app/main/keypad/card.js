import React from "react";

const Card = ({ link }) => {
    return (
        <div className="card">
            <div
                className="card__header"
                style={{
                    backgroundColor: link.color,
                }}
            >
                {link.title}
            </div>
            <div className="card__body">
                <p>{link.description}</p>
                <p>{link.url}</p>
                <button>
                    <a href={link.url}> Ir </a>
                </button>
            </div>
        </div>
    );
};

export default Card;
