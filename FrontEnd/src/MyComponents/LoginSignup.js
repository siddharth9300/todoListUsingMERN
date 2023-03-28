import React from "react";
import Cookies from "js-cookie";
function LoginSignup(props) {
  const handleChange = () => {
    Cookies.set("token", null, { expires: new Date() });
  };
  return (
    <>
      <div className="flex flex-end items-left mr-28  p-2">
        <span
          className="ml-3  cursor-pointer  transition-all max-md:mr-12 text-xl font-medium mt-2 dark:text-white dark:hover:text-gray-400 md:my-2 max-md:text-s "
          onClick={() => props.setLoginUser({})}
        >
          <button onClick={handleChange}>{props.ifUserExist}</button>
        </span>
      </div>
    </>
  );
}
export default LoginSignup;
