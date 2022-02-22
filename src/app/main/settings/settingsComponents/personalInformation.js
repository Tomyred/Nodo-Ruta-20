import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/actions";

const PersonalInformation = () => {
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [selectedFile, setSelectedFile] = useState();
    const [profilePic, setProfilePic] = useState(null);

    useEffect(() => {
        if (selectedFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePic(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        } else {
            setProfilePic(null);
        }
    }, [selectedFile]);

    const fileInputRef = useRef();

    const handleClick = () => {
        const user = {
            firstName,
            lastName,
            profilePic,
        };
        dispatch(setUser(user));
    };

    const handleImageSelect = e => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
        } else {
            setSelectedFile(null);
        }
    };

    return (
        <div className="setting__component">
            {profilePic ? (
                <img
                    className="profilePic__preview"
                    src={profilePic}
                    alt="nodo-profile-pic"
                />
            ) : (
                ""
            )}
            <button
                className="contrast__button"
                onClick={() => {
                    fileInputRef.current.click();
                }}
            >
                Foto de Perfil
            </button>
            <input
                className="form__element"
                type="text"
                placeholder="Nombre"
                onChange={e => setFirstName(e.target.value)}
            />
            <input
                className="form__element"
                type="text"
                placeholder="Apellido"
                onChange={e => setLastName(e.target.value)}
            />

            <input
                style={{ display: "none" }}
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={e => handleImageSelect(e)}
            />
            <button className="contrast__button" onClick={handleClick}>
                Enviar
            </button>
        </div>
    );
};

export default PersonalInformation;
