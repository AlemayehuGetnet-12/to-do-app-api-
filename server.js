const express = require("express");

const app = express();

app.use(express.json());

app.use("/tasks",require("./routes/create"));
app.use("/tasks",require("./routes/read"));
app.use("/tasks",require("./routes/add"));
app.use("/tasks",require("./routes/edit"));
app.use("/tasks",require("./routes/update"));
app.use("/tasks",require("./routes/delete"));

app.listen(3000,()=>{

console.log("Server Running");
});