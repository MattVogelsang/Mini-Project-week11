const router = require("express").Router();
const fs = require("fs");

// Route to get all notes
// URL: http://localhost:3001/api/notes/
router.get("/", (req, res) => {
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Failed to read notes data" });
        }

        try {
            const notes = JSON.parse(data);
            return res.json(notes);
        } catch (parseErr) {
            return res.status(500).json({ error: "Failed to parse notes data" });
        }
    });
});

// Post request (reference to be added based on week 11 mini-project)

module.exports = router;
