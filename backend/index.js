const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
// const db = require('./config/db');
const dotenv = require("dotenv");

dotenv.config();

//connect to db
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log("connect to DB")
);

//import routes
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const classRoute = require("./routes/classes");
const taskRoute = require('./routes/tasks');
const assinmentRoute = require('./routes/assignments');
//middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
//routes middleware
app.use("/api/user", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/classes", classRoute);
app.use('/api/tasks', taskRoute);
app.use("/api/assignments", assinmentRoute);

app.listen(3000, () => console.log("Server Up and running!!!"));
