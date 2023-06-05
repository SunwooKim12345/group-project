const express = require("express");
const cors = require("cors");
const Comp = require('./controller');

const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// app.get("/notes", Comp.getNotesTable );
// console.log("Ddbug: router: getTable");

// app.post("/notes", Comp.insertNote );
// console.log("Ddbug: router: insertNote");

// app.put("/notes/:user", Comp.updateNote );
// console.log("Ddbug: router: updateNote");

// app.delete("/notes/:user", Comp.deleteNote );
// console.log("Ddbug: router: deleteNote");

app.get( "/students", Comp.getStudentinfoTable );
console.log( "Ddbug: router: getStudentinfoTable" );

app.get( "/courses", Comp.getCourseNames );
console.log( "Ddbug: router: getCourseNames" );

app.get( "/coursePre", Comp.getCoursePrereq );
console.log( "Ddbug: router: getCoursePre" );


// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to testcomp application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


