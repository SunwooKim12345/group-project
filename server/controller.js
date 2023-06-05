const { Students, Courses } = require("./model");

const getStudentinfoTable = ( req, res ) => {
    Students.getAll( ( err, data ) => {
        if ( err ) {
            res.status(500).send({
              message: err.message || "Some error occurred."
            });
          } else {
            const students = data.map(item => {
              return {
                studentId: item.studentId,
                password: item.password,
                fName: item.fName,
                lName: item.lName
              };
            });
      
            res.send({ students });
          }
    });
};

const getCourseNames = ( req, res ) => {
    Courses.getAll( ( err, data ) => {
        if ( err ) {
            res.status(500).send({
              message: err.message || "Some error occurred."
            });
          } else {
            const courses = data.map(item => {
              return {
                course: item.course,
                courseName: item.courseName
              };
            });
      
            res.send({ courses });
          }
    });
};

const getCoursePrereq = ( req, res ) => {
    Courses.getPre( ( err, data ) => {
        if ( err ) {
            res.status(500).send({
              message: err.message || "Some error occurred."
            });
          } else {
            const courses = data.map(item => {
              return {
                course: item.course,
                coursePrereq: item.coursePrereq
              };
            });
      
            res.send({ courses });
          }
    })
}

const insertCourse = ( req, res ) => {
    const student = req.body;

    Students.insert( student, ( err, data ) => {
        if ( err ) {
            res.status(500).send({
                message:
                    err.message || "Some error occurred."
            });
        } else {
            res.json( data );
        }
    });
};

const getCourseReg = ( req, res ) => {
    
    Students.getCourse( ( err, data ) => {

        if ( err ) {
            res.status(500).send({
              message: err.message || "Some error occurred."
            });
          } else {
            const student = data.map(item => {
              return {
                studentId: item.studentId,
                course: item.course
              };
            });
      
            res.send({ student });
          }
    })
}

module.exports = {
    getStudentinfoTable,
    getCourseNames,
    getCoursePrereq,
    getCourseReg,
    insertCourse
};