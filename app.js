const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser());
app.use("/api/todo", require("./routes/todo"));

const port = 4000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
