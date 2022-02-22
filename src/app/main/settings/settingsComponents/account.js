import React, { useState } from "react";

const Account = () => {
    const [image, setImage] = useState();
    return (
        <div className="setting__component">
            <input type="file" onChange={e => setImage(e.target.files)} />
            <img src={image} alt="profile-pic" />
        </div>
    );
};

export default Account;
