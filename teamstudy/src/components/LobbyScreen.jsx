import React, { useCallback } from "react";
import { useSocket } from "../context/socketProvider";


const LobbyScreen = () => {
  const [email, setEmail] = React.useState("");
  const [roomID, setRoomID] = React.useState("");

  const socket = useSocket()


//   logic to submit the form data
  const handleformSubmit = useCallback((e) => {
    e.preventDefault();
    if (!email || !roomID) {
      alert("Please fill in both fields.");
      return;
    }
    socket.emit("room.join", { email, roomID });
    console.log({email, roomID,socket});
  },[email, roomID])


  return (
    <form onSubmit={handleformSubmit}>
      <div className="p-2 m-5">
        <h1 className="p-2">Join a Room</h1>
        <input
          className="p-2 text-white rounded-sm m-3"
          type="email"
          placeholder="Enter Email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          className="p-2 text-white rounded-sm m-3"
          type="text"
          placeholder="Enter Room ID"
          value={roomID}
          onChange={(e) => setRoomID(e.target.value)}
        />
        <br />
        <button className="p-2 bg-blue-700 text-white rounded-sm m-3"
        type="submit"
        >
          Join Room
        </button>
      </div>
    </form>
  );
};

export default LobbyScreen;
