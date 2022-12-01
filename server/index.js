import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import adminRoutes from "./routes/adminroutes.js";
import onwerRoutes from "./routes/ownerroutes.js"

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

const PORT = 1800;

app.use("/admin", adminRoutes);
app.use("/owner", onwerRoutes);

// const CONNECTION_URL = "mongodb://0.0.0.0:27017/Grocery-App";
const CONNECTION_URL = "mongodb+srv://rushikesh:rushikesh@cluster0.wmpaxgm.mongodb.net/?retryWrites=true&w=majority";


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
    console.log("Server started on 1800");
  });
  