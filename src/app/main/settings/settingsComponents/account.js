import React, { useState } from "react";

const Account = () => {
    const [image, setImage] = useState();
    return (
        <div className="setting__component">
            <input type="file" onChange={e => console.log(e.target.files)} />
            <img src={image} alt="image" />
        </div>
    );
};

export default Account;
