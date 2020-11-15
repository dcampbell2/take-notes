const path = require("path");
const dbJson = "../db/db.json";

// Need 3 Routes

module.exports = function(app){


// Route 1: get route for /api/notes endpoint

app.get('/api/notes', (req, res) => {

    res.sendFile(path.join(__dirname, dbJson))
    
 });

// Route 2: post route for /api/notes

// app.post("/api/notes", (req, res) => {

// })

// Route 3: delete route for /notes/:id

}