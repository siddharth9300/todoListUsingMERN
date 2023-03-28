import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { BASE_URL } from "./Helper";
export const AddTodo = ({ addTodo }) => {
  const auth = Cookies.get("token");
  const Cemail = JSON.parse(auth);
  const [todo, setTodo] = useState({
    id: Cemail._id,
    title: "",
    desc: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };
  const submit = (e) => {
    e.preventDefault();
    axios.post(`${BASE_URL}/addtodo`, todo).then((res) => {
      // console.log(todo);
      // console.log(res.data.message);
    });
  };
  return (
    <>
      <section className="text-gray-600 dark:text-white dark:bg-slate-900 body-font relative ">
        <div className="container px-5 pt-32 mx-auto ">
          <div className="flex flex-col text-center w-full max-md:mt-10 mb-6">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 dark:text-white text-gray-900">
              Add a Todo
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form className="flex flex-wrap -m-2" onSubmit={submit}>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm dark:text-white text-gray-600"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={todo.title}
                    onChange={handleChange}
                    className="w-full bg-gray-100 dark:bg-opacity-80  bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm dark:text-white text-gray-600"
                  >
                    Description
                  </label>
                  <textarea
                    id="desc"
                    name="desc"
                    value={todo.desc}
                    onChange={handleChange}
                    className="w-full bg-gray-100 dark:bg-opacity-80 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
          <hr className="mt-8 w-full h-1 bg-gray-200 rounded border-0 dark:bg-gray-300" />
        </div>
      </section>
    </>
  );
};
