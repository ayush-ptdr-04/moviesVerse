import React, { useRef, useState } from "react";
import Header from "./Header";
import { BG_URL } from "../utils/constant";
import { checkValidate } from "../utils/validate";

const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleToggelBtn = () => {
    setisSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    const message = checkValidate(
      name?.current?.value,
      email?.current?.value,
      password?.current?.value
    );
    setErrorMessage(message);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="w-screen object-cover" src={BG_URL} alt="BG_IMAGE" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="rounded-lg p-12 w-3/12 my-36 mx-auto left-0 right-0 absolute bg-gray-900 text-white flex-wrap ">
        <h1 className="py-3 font-bold text-3xl">
          {" "}
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            className="rounded-lg bg-gray-500 w-full my-4 p-3"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="rounded-lg bg-gray-500 w-full my-4 p-3"
          placeholder="Email Address"
        />
        <input
          ref={password}
          className="my-4 p-3 bg-gray-500 w-full rounded-lg"
          placeholder="Password"
        />
        <p className="text-red-500 p-2  font-bold">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="cursor-pointer w-full bg-blue-900 p-3 my-4 rounded-lg y-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={handleToggelBtn} className="cursor-pointer py-4">
          {isSignIn
            ? "New to moviesVerse?SignUp Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
