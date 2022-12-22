const express = require("express");
const morgan = require("morgan");

const taskRoutes = require("./routes/tasks.routes");

const app = express();

app.use(morgan("dev"));

app.use(taskRoutes);

app.listen(3001);
console.log("Server is listening on port 3001");
