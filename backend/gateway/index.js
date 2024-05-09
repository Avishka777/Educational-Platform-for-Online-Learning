const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth-service", proxy("http://localhost:4001"));
app.use("/course-service", proxy("http://localhost:4002"));
app.use("/", proxy("http://localhost:4003")); // payments

app.listen(8000, () => {
  console.log("Gateway is Listening to Port 4000");
});
