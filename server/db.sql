CREATE database groupProject;

USE groupProject;

CREATE TABLE studentinfo (
	studentId int,
	password varchar(255),
	fName varchar(255),
	lName varchar(255)
);

CREATE TABLE studentRegistered (
	studentId int,
	course varchar(255)
);

CREATE TABLE coursePre (
	course varchar(255),
	coursePrereq varchar(255)
);

CREATE TABLE courseName (
	course varchar(255),
	courseName varchar(255)
);

-- Inserting course name in courseName table
INSERT INTO courseName ( course, courseName ) VALUES ( 'CSE101', 'Computer Science Principles' );
INSERT INTO courseName ( course, courseName ) VALUES ( 'CSE114', 'Introduction to Object-Oriented Programming' );
INSERT INTO courseName ( course, courseName ) VALUES ( 'CSE214', 'Data Structures' );
INSERT INTO courseName ( course, courseName ) VALUES ( 'CSE215', 'Foundations of Computer Science' );
INSERT INTO courseName ( course, courseName ) VALUES ( 'CSE216', 'Programming Abstractions' );
INSERT INTO courseName ( course, courseName ) VALUES ( 'CSE220', 'System Fundamentals I' );
INSERT INTO courseName ( course, courseName ) VALUES ( 'CSE300', 'Technical Communications' );
INSERT INTO courseName ( course, courseName ) VALUES ( 'CSE303', 'Introduction to the Theory of Computation' );
INSERT INTO courseName ( course, courseName ) VALUES ( 'CSE304', 'Compiler Design' );
INSERT INTO courseName ( course, courseName ) VALUES ( 'CSE305', 'Principles of Database Systems' );
INSERT INTO courseName ( course, courseName ) VALUES ( 'CSE306', 'Operating Systems' );
INSERT INTO courseName ( course, courseName ) VALUES ( 'CSE310', 'Computer Networks' );
INSERT INTO courseName ( course, courseName ) VALUES ( 'CSE316', 'Fundamentals of Software Development' );
INSERT INTO courseName ( course, courseName ) VALUES ( 'CSE320', 'System Fundamentals II' );
INSERT INTO courseName ( course, courseName ) VALUES ( 'CSE331', 'Computer Security Fundamentals' );
INSERT INTO courseName ( course, courseName ) VALUES ( 'CSE416', 'Software Engineering' );

-- Inserting course prerequisite in coursePre table
INSERT INTO coursePre ( course, coursePrereq ) VALUES ( 'CSE114', 'CSE101' );
INSERT INTO coursePre ( course, coursePrereq ) VALUES ( 'CSE214', 'CSE114' );
INSERT INTO coursePre ( course, coursePrereq ) VALUES ( 'CSE216', 'CSE214' );
INSERT INTO coursePre ( course, coursePrereq ) VALUES ( 'CSE220', 'CSE214' );
INSERT INTO coursePre ( course, coursePrereq ) VALUES ( 'CSE303', 'CSE214' );
INSERT INTO coursePre ( course, coursePrereq ) VALUES ( 'CSE303', 'CSE215' );
INSERT INTO coursePre ( course, coursePrereq ) VALUES ( 'CSE304', 'CSE216' );
INSERT INTO coursePre ( course, coursePrereq ) VALUES ( 'CSE304', 'CSE220' );
INSERT INTO coursePre ( course, coursePrereq ) VALUES ( 'CSE304', 'CSE303' );
INSERT INTO coursePre ( course, coursePrereq ) VALUES ( 'CSE305', 'CSE216' );
INSERT INTO coursePre ( course, coursePrereq ) VALUES ( 'CSE306', 'CSE216' );
INSERT INTO coursePre ( course, coursePrereq ) VALUES ( 'CSE306', 'CSE320' );
INSERT INTO coursePre ( course, coursePrereq ) VALUES ( 'CSE310', 'CSE214' );
INSERT INTO coursePre ( course, coursePrereq ) VALUES ( 'CSE310', 'CSE220' );
INSERT INTO coursePre ( course, coursePrereq ) VALUES ( 'CSE316', 'CSE216' );
INSERT INTO coursePre ( course, coursePrereq ) VALUES ( 'CSE320', 'CSE220' );
INSERT INTO coursePre ( course, coursePrereq ) VALUES ( 'CSE331', 'CSE220' );
INSERT INTO coursePre ( course, coursePrereq ) VALUES ( 'CSE331', 'CSE320' );
INSERT INTO coursePre ( course, coursePrereq ) VALUES ( 'CSE416', 'CSE316' );

-- Inserting studentinfo in studentinfo table
INSERT INTO studentinfo ( studentId, password, fName, lName ) VALUES ( 123456789, 'e38804c45d255359322d3a3c9d58522fe0528e87784b6724fca79dd67b891dd', 'Harry', 'Chung' );
INSERT INTO studentinfo ( studentId, password, fName, lName ) VALUES ( 123456790, '124f7d9cfb7da14c498781ff49752edf89cb08574cb19785aaa2a7b4722f5ed', 'Matt', 'Lee' );
INSERT INTO studentinfo ( studentId, password, fName, lName ) VALUES ( 123456791, '13a0461de73c38bf3aa73ccd4f207170cf1dece6300c9fc0248a9e0d70cb995a', 'SUE', 'Park' );






























