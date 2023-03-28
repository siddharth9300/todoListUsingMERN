import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParsers from "cookie-parser"; 
import dotenv from 'dotenv';
import { MongoClient, ServerApiVersion } from "mongodb"


const app = express();
// const { MongoClient, ServerApiVersion } = require('mongodb');
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(cookieParsers()); 

dotenv.config();

const DB = process.env.DATABASE;
const PORT = process.env.PORT || 9002

const credentials = "X509-cert-415975418367858762.pem"


mongoose
  // .connect(`${DATABASE}`, {
    .connect(DB, {
    // .connect("mongodb+srv://sidd9300:Sidd0311@todolist.prd4y5h.mongodb.net/?retryWrites=true&w=majority", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,

    sslKey: credentials,
    sslCert: credentials,
    serverApi: ServerApiVersion.v1

  })
  .then(() => console.log("Connected Successfully"))
  .catch((err) => {
    console.log(err);
  });
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const User = new mongoose.model("User", userSchema);
const todoListSchema = new mongoose.Schema({
  id: String,
  title: String,
  desc: String,
});
const TodoList = new mongoose.model("TodoList", todoListSchema);
app.get("/todos", (req, res) => {
  TodoList.find()
    .then((todos) => {
      res.json(todos);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});
app.get(`/deleteTodo/:id`, (req, res) => {
  const id = req.params.id;
  TodoList.findByIdAndDelete({ _id: id })
  .catch((err) => {
    res.json({ message: err.message });
  });
});
app.post("/addtodo", (req, res) => {
  const { id, title, desc } = req.body;
  const newTodoList = new TodoList({
    id,
    title,
    desc,
  });
  newTodoList
    .save()
    .then(() => {
      res.send({ message: "todo saved" });
    })
    .catch((err) => {
      res.send(err);
    });
});
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }).then((user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "statusok", user: user });
      } else {
        res.send({ message: "Incorrect Passowrd try again" });
      }
    } else {
      res.send({ message: "User not registered Kindly Sign Up" });
    }
  });
});
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ email: email })
    .then((user) => {
      if (user) {
        res.send({ message: "User already registered Kindly Login" });
      } else {
        const newUser = new User({
          name,
          email,
          password,
        });
        newUser
          .save()
          .then(() => {
            res.send({ message: "Successfully Registered" });
          })
          .catch((err) => {
            res.send(err);
          });
      }
    })
    .catch((err) => {
      res.send(err);
    });
});
app.listen(PORT, () => {
  console.log(`DB is stared at prot ${PORT}`);
});
