import React from "react";
import Progress from "./progress";



const Profile = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-6">
        <div className="m-5 p-5 border-gray-700 bg-gray-800 border-2 rounded-md w-2/4">
            <h1 className="text-red-600">Profile</h1>
        </div>

        <div>
            This is your Progess Tracker
        </div>
        </div>
    );
}

export default Profile;