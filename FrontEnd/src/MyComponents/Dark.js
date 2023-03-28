import React, { useState, useEffect } from "react";
import "../App.css";
import Cookies from "js-cookie";

function Dark() {
  const Ctheme = Cookies.get("theme");

  const [theme, setTheme] = useState(null);

  useEffect(() => {
    // if(window.matchMedia('(prefers-color-scheme: dark)').matches){
    if (Ctheme === "dark") {
      // Cookies.set("theme", ("dark"), { expires: 7 });
      setTheme("dark");
    } else {
      Cookies.set("theme", "light", { expires: 7 });

      setTheme("light");
    }
  }, [Ctheme]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.getElementById("dark").classList.add("dark_icon");
    } else {
      document.documentElement.classList.remove("dark");
      document.getElementById("dark").classList.add("light_icon");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    if (theme === "dark") {
      Cookies.set("theme", "light", { expires: 7 });
      setTheme("light");
      document.getElementById("dark").classList.remove("dark_icon");
      document.getElementById("dark").classList.add("light_icon");
    } else {
      Cookies.set("theme", "dark", { expires: 7 });
      setTheme("dark");

      document.getElementById("dark").classList.remove("light_icon");
      document.getElementById("dark").classList.add("dark_icon");
    }
  };

  return (
    <>
      <div className="flex flex-end items-left">
        <button
          id="dark"
          className="cursor-pointer transition-all max-md:mr-6  hover:rounded-md  p-2  h-12 w-12 md:my-2 md:mx-10 rounded-xl"
          onClick={handleThemeSwitch}
        ></button>
      </div>
    </>
  );
}

export default Dark;
