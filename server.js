const express = require ("express");
const fs = require("fs")

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public" , {index:false, extensions:['json']}));


require("./Develop/routes/api-routes")(app);
require("./Develop/routes/html-routes")(app);


app.listen(PORT, () =>{
    console.log(`App is listening on ${PORT}`)
})