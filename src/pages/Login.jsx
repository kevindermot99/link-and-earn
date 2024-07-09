import React from "react";
import Navbar from "../components/Navbar";
import { FcLink } from "react-icons/fc";
import { CgMail } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="w-full h-full min-h-svh flex text-dark-text">
      {/* Form */}
      <div className=" min-h-full w-3/5 max-lg:w-1/2 max-md:w-full p-5 flex flex-col">
        <div className="flex items-center justify-start gap-2 min-h-fit pb-4">
          <FcLink className="text-3xl" />
          <h1 className="font-semibold text-base tracking-tight font-Montserrat ">
            Link & Earn
          </h1>
        </div>
        <div className="flex justify-center items-center flex-col w-full h-full">
          <div className="w-full h-fit flex flex-col max-w-[400px]">
            <h1 className="text-2xl font-medium capitalize">Login</h1>
            <p className="font-normal text-sm opacity-75 pt-2">
              Welcome back, wanna to make money today?
            </p>
            <form className="w-full h-fit flex flex-col mt-5">
              <div className="flex items-start justify-start flex-col mb-3">
                <p className="font-medium text-sm py-1">Email</p>
                <input
                  type="text"
                  className="w-full h-10 ring-1 ring-stone-200 placeholder:text-stone-400 placeholder:font-normal rounded-lg font-medium text-sm focus:outline-main-color p-4"
                  placeholder="Name"
                />
              </div>
              <div className="flex items-start justify-start flex-col mb-3">
                <p className="font-medium text-sm py-1">Password</p>
                <input
                  type="password"
                  className="w-full h-10 ring-1 ring-stone-200 placeholder:text-stone-400 placeholder:font-normal rounded-lg font-medium text-sm focus:outline-main-color p-4"
                  placeholder="Password"
                />
              </div>

              <div className="flex items-start justify-start flex-col mt-3">
                <input
                  type="submit"
                  className="w-full h-10 rounded-lg font-medium text-sm bg-main-color text-white flex cursor-pointer active:scale-95 capitalize transition "
                  value="login"
                />
                <button className="w-full h-10 rounded-lg font-medium text-sm ring-1 ring-stone-300 flex justify-center items-center gap-2 mt-2 cursor-pointer active:scale-95 capitalize transition ">
                  <FcGoogle className="text-xl" /> continue with google
                </button>
              </div>
            </form>
            <p className="font-normal text-sm w-full h-fit flex items-center justify-center gap-1 py-6 ">
              Don't have an account?{" "}
              <Link to={"/register"} className="font-medium text-main-color">
                Register
              </Link>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2 min-h-fit pt-4">
          <p className="text-xs text capitalize text-dark-text/70">
            &copy; Link & earn 2023
          </p>
          <p className="text-xs text capitalize text-dark-text/70 flex items-center gap-1">
            <CgMail className="text-base" />
            linkandearn@gmail.com
          </p>
        </div>
      </div>
      {/* Visual */}
      <div className="bg-stone-100 min-h-full w-4/5 max-lg:w-1/2 max-md:hidden flex flex-col p-16 overflow-clip">
        <h1 className="font-semibold tracking-tight text-3xl font-Poppins   ">Earn money effortlessly with a few clicks. Just share a link and start earning today.</h1>
      </div>  
    </div>
  );
}

export default Login;
