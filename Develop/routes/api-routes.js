const fs = require("fs");
const path = require("path");
const dbJson = "../db/db.json";

const db = require("../db/db.json")

// Need 3 Routes

module.exports = function(app){


// Route 1: get route for /api/notes endpoint

app.get('/api/notes', (req, res) => {

    res.json(db)
    
 });

// Route 2: post route for /api/notes

app.post("/api/notes", (req, res) => {

    db.push(req.body)

    console.log(db)

    return res.json(db)
})

// Route 3: delete route for /notes/:id

}