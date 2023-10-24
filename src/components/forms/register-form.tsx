"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { AiOutlineGoogle } from "react-icons/ai";
import Link from "next/link";

export default function RegisterForm() {
  const [registerData, setRegisterData] = useState({
    email: "",
    name: "",
    password: "",
  });

  const router = useRouter();

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await axios
      .post("/api/register", registerData)
      .then(() => {})
      .then(() => {
        router.push("/login");
        toast.success("Successfully registered");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    // Container
    <div className="flex lg:px-[27.5rem] px-3 justify-center items-center">
      {/* FormContainer */}
      <div className="flex w-[35rem] items-center justify-center flex-col">
        {/* FormHeader */}
        <div className="py-4 px-3 flex items-center justify-center w-full border-b border-silver-tree-500">
          <h2 className="text-lg font-bold">Regsiter</h2>
        </div>
        {/* FormBody */}
        <form
          onSubmit={handleRegister}
          className="flex flex-col md:px-6 px-4 pt-9 pb-12 gap-9 items-center w-full"
        >
          {/* ContentTitle*/}
          <div className="flex w-full flex-col justify-start items-center">
            <p className="text-3xl font-bold self-start">
              Welcome to MoviesApp
            </p>
            <p className="text-sm font-semibold md:self-start text-neutral-300">
              Create an account.
            </p>
          </div>
          {/* Labels */}
          <div className="flex flex-col gap-4 items-center w-full">
            {/* Email */}
            <div className="relative flex flex-col w-full">
              <input
                type="email"
                placeholder=" "
                className="peer w-full px-3 py-3 pt-8 font-light bg-neutral-700 border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none border-none"
                value={registerData.email}
                onChange={(e) =>
                  setRegisterData({ ...registerData, email: e.target.value })
                }
              />
              <label className="absolute text-base duration-150 transform -translate-y-3 top-5 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-3 peer-focus:scale-75 peer-focus:translate-x-1 px-3">
                Email
              </label>
            </div>
            <div className="relative flex flex-col w-full">
              <input
                type="text"
                placeholder=" "
                className="peer w-full px-3 py-3 pt-8 font-light bg-neutral-700 border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none border-none"
                value={registerData.name}
                onChange={(e) =>
                  setRegisterData({ ...registerData, name: e.target.value })
                }
              />
              <label className="absolute text-base duration-150 transform -translate-y-3 top-5 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-3 peer-focus:scale-75 peer-focus:translate-x-1 px-3">
                Full Name
              </label>
            </div>
            <div className="relative flex flex-col w-full">
              <input
                type="password"
                placeholder=" "
                className="peer w-full px-3 py-3 pt-8 font-light bg-neutral-700 border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none border-none"
                value={registerData.password}
                onChange={(e) =>
                  setRegisterData({ ...registerData, password: e.target.value })
                }
              />
              <label className="absolute text-base duration-150 transform -translate-y-3 top-5 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-3 peer-focus:scale-75 peer-focus:translate-x-1 px-3">
                Password
              </label>
            </div>
          </div>
          {/* Submit */}
          <div className="w-full flex justify-center items-center">
            <button
              className="flex px-6 py-4 justify-center items-center flex-1 bg-silver-tree-500 rounded-md font-semibold hover:font-bold hover:bg-silver-tree-400 transition"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
        {/* FormFooter */}
        <div className="flex px-6 py-9 flex-col justify-end items-center gap-4 border-t border-silver-tree-500 w-full ">
          {/* GoogleButton */}
          <div className="relative w-full">
            <button
              disabled
              className=" bg-neutral-700 flex w-full py-4 items-center justify-center flex-1 rounded-md font-semibold hover:bg-neutral-500 hover:font-bold transition disabled:cursor-not-allowed disabled:opacity-50"
            >
              Sign up with Google
            </button>
            <p className="absolute left-2 top-4 opacity-50">
              <AiOutlineGoogle size={24} />
            </p>
          </div>
          {/* Link */}
          <Link
            href={"/login"}
            className="text-neutral-300 text-sm font-semibold"
          >
            Already have an account?{" "}
            <span className="underline hover:text-white font-bold ml-2 transition">
              Log in
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
