require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

// const ridesRouter = require("./routes/rides");
const userRoutes = require("./routes/user");
const rideRoutes = require("./routes/rides");
// express app
const app = express();

// middleware
// used to parse the body of the request
app.use(express.json());
// used to parse the url
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// test path to check if the server is running
app.get("/", (req, res) => {
  // res.send("Hello World");
  console.log("Hello World");
});

// // use the routes only when the following path is hit
//middleware 
app.use((req,res,next)=>{
  try{
    
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With, Content-Type, Accept"
    );
    res.setHeader("Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS");
    next();
  }
  catch(err){
    console.log(err);
  }
})
app.use("/api/user", userRoutes);
app.use("/api/rides", rideRoutes);

// connect to the database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server is running on port 4000");
    });
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));
