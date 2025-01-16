import React from "react";
import PasswordInput from "./passwordInput";
import Button from "./button";
import {useState} from "react";
// import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";

const LoginForm = () => {
  const [username, setUsername] = useState(""); // State for storing username
  const [password, setPassword] = useState(""); // State for storing password

  // Handle Login function
  const HandleLogin = (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    // Basic validation for empty fields
    if (!username || !password) {
      console.log("Both fields are required!");
      return;
    }

    // Here you can make an API call to check credentials (example)
    const userCredentials = { username, password };

    if (username === "admin" && password === "password123") {
      console.log("Login successful");
    } else {
      console.log("Invalid credentials");
}
};
  return (
    <>
      <div className="flex justify-center items-center mt-6">
        <div className="m-5 p-5 border-gray-700 bg-gray-800 border-2 rounded-md w-2/4">
          <form action="">
            <div>
              <input type="text" className="m-3 ml-1 p-3" placeholder="Username" />
            </div>
            <div>
              <PasswordInput/>
            </div>
            <Button label = "login" onClick={HandleLogin}/>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
