import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "./Helper";
// import { useHistory } from "react-router-dom"; 
import axios from "axios";
import Cookies from "js-cookie";
const Login = ({setLoginUser}) => {
  // const setLoginUser = props.setLoginUser
  // const history = useHistory();
  const [status, setStatus] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const login = (e) => {
    e.preventDefault();
    axios.post(`${BASE_URL}/login`, user).then((res) => {
      if (res.data.message === "statusok") {
        Cookies.set("token", JSON.stringify(res.data.user), { expires: 7 });
        setStatus("Login SuccessFull");
        setLoginUser(res.data.user);
      } else {
        setStatus("Incorrect Email or Password");
      }
      // history.pushState("/");
    });
  };
  return (
    <>
      <section className="text-gray-600 body-font py-6 dark:bg-slate-900">
        <div className="px-10 pb-28 pt-36 mr-16 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900 dark:text-white">
              Tick off your tasks in style - Your to-do list app makes getting
              things done a wild ride!
            </h1>
            <p className="leading-relaxed mt-4 dark:text-gray-200">Its not ours Its yours.</p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-200 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-16 md:mt-0">
            <form onSubmit={login}>
              <h2 className="text-gray-900 text-3xl font-medium title-font mb-5">
                Login
              </h2>
              <div className="relative mb-4">
                <label
                  htmlFor="full-name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  required
                  id="email"
                  value={user.email}
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Password
                </label>
                <input
                  required
                  type="password"
                  id="password"
                  value={user.password}
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="mx-auto w-fit">
                <div className="mx-auto">
                  <button
                    type="submit"
                    className="text-white bg-indigo-500 border-0 py-2 px-12 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Login
                  </button>
                </div>
                <div className="mx-14 ">
                  <h2 className="text-gray-600 text-lg font-medium title-font my-2 mx-auto">
                    Or
                  </h2>
                </div>
                <Link to="/register" className="mx-auto">
                  <button className="text-white bg-indigo-500 border-0 py-2 px-10 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Sign Up
                  </button>
                </Link>
              </div>
              <p className="text-s font-medium text-red-500 mt-3">{status}</p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
