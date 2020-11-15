const path = require("path");

// Need 3 Routes

module.exports = function(app){

// Route 1: get route for /api/notes endpoint

app.get('/api/notes', (req, res) => {

    res.sendFile(path.join(__dirname, "../db/db.json"))
    
 });

// Route 2: post route for /api/notes

// Route 3: delete route for /notes/:id

}