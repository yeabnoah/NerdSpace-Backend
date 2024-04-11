// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const app = express();
// app.use(cors({
//   origin :true
// }));
// const userRouter = require("./routes/users");
// // const postRouter = require("./routes/Posts");


// // app.use(express.static("public"));
// app.use("/users", userRouter);

// // app.use("/posts", postRouter);

// mongoose.connect(process.env.MONGO_URL).then(() => {
//   app.listen(process.env.PORT, () => {
//     console.log(`server is running on port ${process.env.PORT}`);
//     console.log(`Database connected successfully`);
//   });
// });


const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Routes
const userRouter = require("./routes/users");
// const postRouter = require("./routes/Posts");
app.use("/users", userRouter);
// app.use("/posts", postRouter);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connected successfully");
    // Start the server
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch(error => {
    console.error("Database connection error:", error);
  });
