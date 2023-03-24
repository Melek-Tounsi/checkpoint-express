const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || "8000";
const time = require('./time');

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
app.use(time);


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
  });

app.get("/contactus", (req, res) => {
res.render("contactus", { title: "contactus" });
});

app.get("/ourservices", (req, res) => {
res.render("ourservices", { title: "ourservices" });
});  