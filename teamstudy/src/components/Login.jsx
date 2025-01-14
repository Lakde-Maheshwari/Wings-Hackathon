import React from "react";
import PasswordInput from "./passwordInput";
import Button from "./button";
const LoginForm = () => {
  const HandleLogin = (e) => {
    e.preventDefault();
    console.log("login");
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
