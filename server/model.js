const sql = require("./db.js");

const Students = function( student ) {
    this.studentId = student.studentId;
    this.password = student.password;
    this.fName = student.fName;
    this.lName = student.lName;
}

Students.getAll = ( result ) => {
    console.log( "get All students!" );
    let query = "SELECT * FROM studentinfo";

    sql.query( query, ( err, res ) => {
        if ( err ) {
          console.log( "error: ", err );
          result( null, err );

          return;
        }
    
        console.log( "students: ", res );

        return result( null, res );
      });
}

module.exports = {
    Students
};