const { Students } = require("./model");

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

module.exports = {
    getStudentinfoTable
};