const path = require("path")

// Routes

// Route 1: get route to send html file to "/notes"

module.exports = function(app){
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })

}

// Route 2: get route to send index file to "*"