const express = require ("express");
const fs = require("fs")

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(express.static("public" , {index:false, extensions:['json']}));


require("./routes/api-routes")(app);
require("./routes/html-routes")(app);


app.listen(PORT, () =>{
    console.log(`App is listening on ${PORT}`)
})