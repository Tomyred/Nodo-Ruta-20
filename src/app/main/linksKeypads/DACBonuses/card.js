import { motion } from "framer-motion";
import React from "react";

const Card = ({ index, link, deleteCard }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
                opacity: 1,
                scale: 1,
                transition: { delay: index * 0.2 },
            }}
            className="card"
        >
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
                <div className="card__info">
                    <p className="card__description">{link.description}</p>
                    <p className="soft__text">{link.url}</p>
                </div>

                <div className="card__actions">
                    <a href={link.url}>
                        <button className="card__button">Ir</button>
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default Card;
