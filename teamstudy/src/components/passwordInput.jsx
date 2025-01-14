import React, { useState } from "react";

const PasswordInput = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisible = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <>
            <div className="flex ">
                <input
                    type={passwordVisible ? "text" : "password"}
                    className="m-3 p-3 ml-44 rounded-md"
                    placeholder="Password"
                />
                <button
                    type="button"
                    onClick={togglePasswordVisible}
                    className="p-2 bg-blue-700 text-white rounded-md m-3"
                >
                    {passwordVisible ? "Hide" : "Show"}
                </button>
            </div>
        </>
    );
};
export default PasswordInput;
