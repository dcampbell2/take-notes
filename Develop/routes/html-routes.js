const path = require("path")

// Routes

module.exports = function(app){
// Route 1: get route to send html file to "/notes"
    app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/notes.html"))
    })

// Route 2: get route to send index file to "*"
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })

}