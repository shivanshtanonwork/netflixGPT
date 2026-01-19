import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d13e2d55-5cdd-48c0-a55b-4b292d0b9889/web/IN-en-20251229-TRIFECTA-perspective_d7edcd70-4cfd-441c-858c-c5e400ed6c2b_large.jpg"
          alt="bg_image"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black/80 text-white my-36 mx-auto left-0 right-0 rounded-md">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-3 w-full bg-zinc-800 rounded-md focus:outline-none focus:ring-1 focus:ring-white"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-3 w-full bg-zinc-800 rounded-md focus:outline-none focus:ring-1 focus:ring-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-3 w-full bg-zinc-800 rounded-md focus:outline-none focus:ring-1 focus:ring-white "
        />
        <button className="p-4 my-6 bg-red-600 hover:bg-red-700 w-full rounded-md font-semibold ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "Are your new to Netflix? Sign Up now"
            : "Already registered? Sign In now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
