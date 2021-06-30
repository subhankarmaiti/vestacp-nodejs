const express = require("express");
const app = express();
const port = "/home/admin/web/YOUR_DOMAIN.COM/nodeapp/app.sock";
const hostname = "YOUR_HOST_NAME";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send({ info: "APP test server" });
});

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
