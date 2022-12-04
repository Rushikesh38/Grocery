import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import adminRoutes from "./routes/adminroutes.js";
import onwerRoutes from "./routes/ownerroutes.js"
import userRoutes from "./routes/users.js"

// code to run a python file using Node.js. Will need this when we add a recommendation model
// import {spawn} from 'child_process'

// const childPython = spawn('python', ['movie_rec.py', "transformers"]);

// childPython.stdout.on('data',(data)=>{
//   console.log(`stdout: ${data}`);
// });

// childPython.stderr.on('data',(data)=>{
//   console.log(`stderr: ${data}`);
// });

// childPython.on('close',(close)=>{
//   console.log(`error: ${close}`);
// });

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = 1300;

app.use("/admin", adminRoutes);
app.use("/owner", onwerRoutes);
app.use("/user", userRoutes);

// const CONNECTION_URL = "mongodb://0.0.0.0:27017/Grocery-App";
const CONNECTION_URL = "mongodb://rushikesh:rushikesh@ac-duddpxx-shard-00-00.wmpaxgm.mongodb.net:27017,ac-duddpxx-shard-00-01.wmpaxgm.mongodb.net:27017,ac-duddpxx-shard-00-02.wmpaxgm.mongodb.net:27017/?ssl=true&replicaSet=atlas-zzmjk1-shard-0&authSource=admin&retryWrites=true&w=majority";


mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch((error) => {
    console.log("Couldn't connect");
    console.log(error);
  });

app.listen(PORT, () => {
    console.log("Server started on 1300");
  });
  