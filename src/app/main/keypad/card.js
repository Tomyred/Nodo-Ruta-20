import React from "react";

const Card = ({ link, deleteCard }) => {
    return (
        <div className="card">
            <div
                className="card__header"
                style={{
                    backgroundColor: link.color,
                }}
            >
                {link.title}
                <i
                    className="fa-solid fa-trash"
                    onClick={() => deleteCard(link._id)}
                ></i>
            </div>
            <div className="card__body">
                <p className="card__description">{link.description}</p>
                <p className="card__url">{link.url}</p>
                <div className="card__actions">
                    <button className="card__button">
                        <a href={link.url}> Ir </a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
