import React, { useState } from "react";
import Header from "./Header";
import { BG_URL } from "../utils/constant";

const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);

  const handelToggelBtn = () => {
    setisSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="w-screen object-cover" src={BG_URL} alt="BG_IMAGE" />
      </div>
      <form className="rounded-lg p-12 w-3/12 my-36 mx-auto left-0 right-0 absolute bg-gray-900 text-white flex-wrap ">
        <h1 className="py-3 font-bold text-3xl">
          {" "}
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {/* <input
          className="rounded-lg bg-gray-500 w-full my-4 p-3"
          placeholder="Full Name"
        /> */}
        <input
          className="rounded-lg bg-gray-500 w-full my-4 p-3"
          placeholder="Email Address"
        />
        <input
          className="my-4 p-3 bg-gray-500 w-full rounded-lg"
          placeholder="Password"
        />
        <button className="cursor-pointer w-full bg-blue-900 p-3 my-4 rounded-lg y-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={handelToggelBtn} className="cursor-pointer py-4">
          {isSignIn
            ? "New to moviesVerse?SignUp Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
