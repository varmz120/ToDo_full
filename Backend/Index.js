const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv")
const taskRoute=require("./routes/task");
const cors = require('cors');

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("MongoDB Server connected"))
.catch((err)=>{
    console.log(err)
})

app.use(cors());

app.use(express.json());

app.use("/api/tasks",taskRoute);


app.listen(process.env.PORT||4000,()=>{
    console.log("Backend Server is running")
})