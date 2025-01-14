import React from "react";

const VideoChat = () => {
    return <>
    <div className="text-white text-2xl grid grid-cols-2 gap-2">
        {/* <h1 className="text-white">This is videochat page</h1> */}
        <video className="w-full h-80 bg-black" src="" id="user-1" autoPlay playsInline></video>
        <video className="w-full h-80 bg-black" src="" id="user-2" autoPlay playsInline></video>
        <video className="w-full h-80 bg-black" src="" id="user-3" autoPlay playsInline></video>
        <video className="w-full h-80 bg-black" src="" id="user-4" autoPlay playsInline></video>
    </div>
    </>
}

export default VideoChat;