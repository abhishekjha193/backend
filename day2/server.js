const express = require("express");

const app = express();

const notes = []

app.use(express.json())

app.post("/notes", (req, res) => {
  console.log(req.body);
  notes.push(req.body)
  res.send("Notes got created");
});

app.get("/notes", (req, res) => {
 res.send(notes)
});


app.listen(3000, () => {
  console.log("server connected at port 3000");
});
