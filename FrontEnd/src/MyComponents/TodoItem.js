import React from "react";
import axios from "axios";
import "../App.css";
export const TodoItem = ({ todo }) => {
  const onDelete = (todo) => {
    const id = todo._id;
    document.getElementById("title" + todo._id).style.textDecoration =
      "line-through";
    document.getElementById("desc" + todo._id).style.textDecoration =
      "line-through";
    var delay = (function () {
      var timer = 0;
      return function (callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
      };
    })();
    delay(function () {
      axios
        .get(`http://localhost:9002/deleteTodo/${id}`)
        .then((res) => {
          console.log(res.data);
          console.log("data received");
          console.log(todo);
          console.log(id);
        })
        .catch((err) => {
          console.log("Error deleting todo: ", err);
        });
    }, 500);
  };
  return (
    <section
      className="text-gray-600 my-4 border-gray-400 border-4 border-solid rounded-3xl body-font overflow-hidden dark:bg-slate-900"
      id={"scroll-" + todo._id}
    >
      <div className="container  px-5 py-2 mx-auto">
        <div className=" divide-y-2  divide-gray-100">
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-16 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                className="text-red-500 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
            </div>
            <div className="md:flex-grow ">
              <h2
                className="text-2xl font-medium dark:text-white text-gray-900 title-font mb-2"
                id={"title" + todo._id}
              >
                {todo.title}
              </h2>
              <p
                className="leading-relaxed dark:text-gray-200 break-words "
                id={"desc" + todo._id}
              >
                {todo.desc}
              </p>
              <button
                className="flex text-white bg-red-500 border-0 py-2 px-6 items-center mt-4 focus:outline-none hover:bg-red-600 rounded del-btn"
                onClick={() => {
                  onDelete(todo);
                }}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
