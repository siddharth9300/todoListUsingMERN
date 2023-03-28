import React from "react";

export const About = () => {
  return (
    <>
      <section className="text-gray-600 body-font pb-12  dark:bg-slate-900">
        <div className="container px-5 py-12 mx-auto ">
          <div className="flex flex-col text-center w-full mt-16 max-md:mt-24">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-10 max-md:mb-6 dark:text-white text-gray-900">
              About
            </h1>
          </div>
          <div className="text-center w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium dark:text-white text-gray-900">
              Your Todo List
            </h1>
            <div className="container mx-auto flex px-5 py-6 items-center justify-center flex-col">
              <img
                className="w-64 mb-10 ml-12 max-md:w-32 object-cover object-center rounded"
                alt="hero"
                src="./notes.png"
              />
              <p className="mb-8 w-3/6 max-md:w-5/6 leading-relaxed dark:text-gray-200">
              Our MERN stack Todo website helps you manage your daily tasks easily. Built with MongoDB, Express, React, and Node.js, our platform is efficient and scalable. Keep track of your to-dos and stay productive with us.
              </p>
            </div>
            <div className="flex justify-center">
              <a
                href="https://github.com/siddharth9300/todoListUsingMERN"
                rel="noreferrer"
                target="_blank"
                className=" inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg"
              >
                Source Code - Github
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
