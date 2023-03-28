import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
function Register() {
  const history = useHistory();
  const [status, setStatus] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const register = (e) => {
    e.preventDefault();
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      axios.post("http://localhost:9002/register", user).then((res) => {
        var mess = res.data.message;
        setStatus(mess);
        history.push("/");
      });
    } else {
      var mess = "Password Not Matched";
      setStatus(mess);
    }
  };
  return (
    <>
      <section className="  text-gray-600 body-font py-6 dark:bg-slate-900">
        <div className="px-10 pb-28 pt-36 mr-16 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900 dark:text-white">
              Tick off your tasks in style - Your to-do list app makes getting
              things done a wild ride!
            </h1>
            <p className="leading-relaxed mt-4 dark:text-gray-200">Its not ours Its yours.</p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-200 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <form onSubmit={register}>
              <h2 className="text-gray-900text-3xl font-medium text-3xl title-font mb-5">
                Sign Up
              </h2>
              <div className="relative mb-4">
                <label
                  htmlFor="full-name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  id="name"
                  name="name"
                  value={user.name}
                  placeholder="Full Name"
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  required
                  id="email"
                  name="email"
                  value={user.email}
                  placeholder="Email"
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="password"
                  className="leading-7 text-sm text-gray-600"
                >
                  Password
                </label>
                <input
                  required
                  type="password"
                  id="password"
                  name="password"
                  value={user.password}
                  placeholder="Password"
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="re-password"
                  className="leading-7 text-sm text-gray-600"
                >
                  Re-Enter Password
                </label>
                <input
                  required
                  type="password"
                  id="re-password"
                  name="reEnterPassword"
                  value={user.reEnterPassword}
                  placeholder="Re-Enter Password"
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="mx-auto w-fit">
                <div className="mx-auto">
                  <button
                    type="submit"
                    className="text-white bg-indigo-500 border-0 py-2 px-10 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Sign Up
                  </button>
                </div>
                <div className="mx-14 ">
                  <h2 className="text-gray-600 text-lg font-medium title-font my-2 mx-auto">
                    OR
                  </h2>
                </div>
                <Link to="/" className="mx-auto">
                  <button className="text-white bg-indigo-500 border-0 py-2 px-12 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Login
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
}
export default Register;
