require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const logUploadRoute = require("./routes/log-upload");
app.use("/api", logUploadRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
