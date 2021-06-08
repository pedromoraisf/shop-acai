require("dotenv/config");

// core
const express = require("express"),
  morgan = require("morgan"),
  cors = require("cors");

// routes
const routes = require("./routes");

// instance
const app = express();

// uses`s
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(routes);

// listener
app.listen(process.env.PORT, () => {
  console.log(`Server listening on ${process.env.PORT}`);
});
