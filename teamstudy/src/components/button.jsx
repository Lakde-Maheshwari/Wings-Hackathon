import React from "react";


const Button = ({label, onClick}) => {
    return (
        <button className="p-2 bg-blue-700 text-white rounded-md m-3 hover:border-white" onClick={onClick}>
            {label}
        </button>
    );
}

export default Button;