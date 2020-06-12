const fs = require("fs");


module.exports = app => {
  app.get("/api/notes", (req,res) => {
    fs.readFile("./db/db.json", (err, data) => {
      if (err) {
        res.status(503);
        res.end();
      }
      else {
        res.json(JSON.parse(data));
      }
    });
  });

  app.post("/api/notes", (req,res) => {
    fs.readFile("./db/db.json", (err, data) => {
      if (err) {
        res.status(503);
        res.end();
      }
      else {
        const notesArray = JSON.parse(data);
        const id = notesArray[notesArray.length-1].id + 1;
        const note = {...req.body,"id": id};
        notesArray.push(note);
        fs.writeFile("./db/db.json", JSON.stringify(notesArray), err => {
          if (err) {
            res.status(503);
            res.end();
          }
          else {
            res.json(note);
          }
        });
      }
    });
  });

  app.delete("/api/notes/:id", (req,res) => {
    var selectedNoteID = parseInt(req.params.id);
    console.log(`id is ${selectedNoteID}, type is ${typeof selectedNoteID}`);
    fs.readFile("./db/db.json", (err, data) => {
      if (err) {
        res.status(503);
        res.end();
      }
      else {
        let notesArray = JSON.parse(data);
        notesArray = notesArray.filter(note => note.id !== selectedNoteID);
        fs.writeFile("./db/db.json", JSON.stringify(notesArray), err => {
          if (err) {
            res.status(503);
            res.end();
          }
          else {
            res.end();
          }
        });
      }
    });
  });
}