import React from "react";
import SignIn from "../../components/SignIn";
import Navbar from "../../components/Navbar";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className=" mx-auto w-[90%] md:w-[95%] xl:w-[85%]  ">
        <div>
          <SignIn />
        </div>
      </div>
    </div>
  );
};

export default Login;
