require("dotenv/config");

// core
const express = require("express"),
  morgan = require("morgan");

// routes
const routes = require("./routes");

// instance
const app = express();

// uses`s
app.use(express.json());
app.use(morgan("dev"));
app.use(routes);

// listener
app.listen(process.env.PORT, () => {
  console.log(`Server listening on ${process.env.PORT}`)
});