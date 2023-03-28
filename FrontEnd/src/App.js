import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";
import Login from "./MyComponents/Login";
import Register from "./MyComponents/Register";
import React, { useState , useEffect} from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BASE_URL } from "./MyComponents/helper";
function App() {
  const [user, setLoginUser] = useState({});




    const auth = Cookies.get("token");
    // console.log(user)
    // console.log(auth);
    if(Object.keys(user).length === 0){
      
      if (auth) {
        axios.post(`${BASE_URL}/login`, JSON.parse(auth)).then((res) => {
          if (res.data.user) {
            setLoginUser(res.data.user);
            // history.pushState("/");
          }
        });
      } 
    
  
  // var UserExist = false;
  // if (user & user._id) {
  //   UserExist = true;
  }
  return (
    <>
      <Router>
        <Header
          title="Your Todo List"
          user={user}
          setLoginUser={setLoginUser}
        />
        <Switch>
          <Route exact path="/">
            {user && user._id ? (
              // {UserExist ? (
              <>
                <AddTodo />
                <Todos />
              </>
            ) : (
              <Login setLoginUser={setLoginUser} />
            )}
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          {/* <Route exact path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route> */}
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
        <Footer title="Your Todo List" />
      </Router>
    </>
  );
}
export default App;
