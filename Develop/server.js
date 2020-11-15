const express = require ("express");

const app = express();

const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/html-routes")(app);

// require("./routes/api-routes");

app.listen(PORT, () =>{
    console.log(`App is listening on ${PORT}`)
})