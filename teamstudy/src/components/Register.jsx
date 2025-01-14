import React from "react";
import PasswordInput from "./passwordInput";
import Button from "./button";
const RegisterForm = () => {
  const HandleSignin = (e) => {
    e.preventDefault();
    console.log("Register");
  };

  return (
    <>
      <div className="flex justify-center items-center mt-6">
        <div className="m-5 p-5 border-gray-700 bg-gray-800 border-2 rounded-md w-2/4">
          <form action="">
            <div>
              <input
                type="text"
                className="m-3 ml-1 p-3 rounded-md"
                placeholder="Username"
              />
            </div>
            <div>
              <PasswordInput />
            </div>
            <div>
              <PasswordInput />
            </div>
            <Button label="Register" onClick={HandleSignin} />
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
