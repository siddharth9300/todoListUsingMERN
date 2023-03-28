import React, { useEffect, useState } from "react";
import { TodoItem } from "./TodoItem";
import axios from "axios";
import Cookies from "js-cookie";
export const Todos = (props) => {
  const auth = Cookies.get("token");
  const Nauth = JSON.parse(auth);
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:9002/todos").then((res) => {
      const fetchTodo = Object.values(res.data).filter(
        (todo) => String(todo.id) === String(Nauth._id)
      );
      setTodos(fetchTodo);
    });
  }, [todos, Nauth]);
  return (
    <>
      <section className="text-gray-600 dark:bg-slate-900 body-font pb-24">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col text-center w-full ">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-1 dark:text-white text-gray-900">
              Todo List
            </h1>
          </div>
        </div>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base max-md:ml-8 font-medium dark:text-white text-gray-900">
          {todos.length === 0
            ? "No Todo to Display!"
            : todos.map((todo) => {
                return (
                  <TodoItem
                    todo={todo}
                    key={todo._id}
                    onDelete={props.onDelete}
                  />
                );
              })}
        </p>
      </section>
    </>
  );
};
