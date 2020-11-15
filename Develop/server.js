const express = require ("express");

require("./routes/html-routes");

// require("./routes/api-routes");

const app = express();

const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.listen(PORT, () =>{
    console.log(`App is listening on ${PORT}`)
})