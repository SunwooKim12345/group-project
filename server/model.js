const sql = require("./db.js");

const Students = function( student ) {
    this.studentId = student.studentId;
    this.password = student.password;
    this.fName = student.fName;
    this.lName = student.lName;
}

const Courses = function( course ) {
    this.course = course.course;
    this.courseName = course.courseName;
    this.coursePrereq = course.coursePrereq;
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

Courses.getAll = ( result ) => {
    console.log( "get All courses!" );
    let query = "SELECT * FROM courseName";

    sql.query( query, ( err, res ) => {
        if ( err ) {
          console.log( "error: ", err );
          result( null, err );

          return;
        }
    
        console.log( "courses: ", res );

        return result( null, res );
      });

}

Courses.getPre = ( result ) => {
    console.log( "get All course Prerequisite!" );
    let query = "SELECT * FROM coursePre";

    sql.query( query, ( err, res ) => {
        if ( err ) {
          console.log( "error: ", err );
          result( null, err );

          return;
        }
    
        console.log( "courses: ", res );

        return result( null, res );
      });

}


module.exports = {
    Students,
    Courses
};