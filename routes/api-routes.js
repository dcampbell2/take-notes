const fs = require("fs");
const path = require("path");
const dbJson = "../db/db.json";

let id = 0;

// Need 3 Routes

module.exports = function (app) {

  const db = require("../db/db.json")
  // Route 1: get route for /api/notes endpoint

  app.get("/api/notes", (req, res) => {
    res.json(db);
  });

  // Route 2: post route for /api/notes

  app.post("/api/notes", (req, res) => {
    let newNote = {
      title: req.body.title,
      text: req.body.text,
      id: JSON.stringify(id++,)
    };

    db.push(newNote);

    return res.json(db);
  });

  // Route 3: delete route for /notes/:id

  app.delete("/api/notes/:id", (req, res) => {
    let activeNote = req.params.id;

    console.log(activeNote);

    let result = db.filter(note => note.id != activeNote)

    console.log(result);

    

    fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(result), "utf8", (err, data) =>{
        if(err) throw err;
        console.log("new DB file created without deleted note.")
    })

  });
};
