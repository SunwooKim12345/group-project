import '../CSS/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //Import bootstrap
import NavLogin from './NavLogin';
import NavSmLogin from './NavSmLogin';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import hashutil from "../javascript/hashutil.mjs";
import Cookies from 'js-cookie';

const Login = () => {

    const navigate = useNavigate();

    const [ studentId, setStudentId ] = useState( '' );
    const [ password, setPassword ] = useState( '' );

    const handleUserCookie = ( user ) => {
        Cookies.set( 'studentId', studentId );
    }


    const handleLogin = ( event ) => {
        event.preventDefault();
        
        fetch("http://localhost:8080/students")
        .then((response) => response.json())
        .then( (data) => {
            const students = Array.from(Object.values(data.students));

            let count = 0;
            let student = '';
            
            for( let idx = 0; idx < students.length; idx++ ) {

                let fName = students[idx].fName;
                let lName = students[idx].lName;

                console.log( "fName: " + fName );
                console.log( "lName: " + lName );
                console.log( "password: " + students[idx].password );

                console.log(hashutil( fName, lName, password ));

                if( students[idx].studentId == studentId
                    && students[idx].password === hashutil( fName, lName, password )) {
                        count++;
                        student = students[idx].studentId;
                        console.log( count );
                }
            }

            if( count === 0 ) {
                alert( "Invalid ID or Password. Try again." )
            }
            else {

                handleUserCookie( student );
                navigate('/home');
            }
        })

    }

    return (
        <>
            <div className='bg-transparent d-flex container text-white h2 align-items-center justify-content-center'>CourseMan!</div>
            <NavLogin className="lg-screen"/>
            <NavSmLogin classNAme='sm-screen' />

            <div className='container d-flex justify-content-center align-items-center'>
                <div className="content-box text-center">
                    <div className='bg-blue login'>
                        <div className='bg-transparent d-flex container h2 align-items-center justify-content-center'>Login Form</div>
                        <form onSubmit={handleLogin}>
                            <label for="id" className='id-label'>ID:</label>
                            <input type="text" id="id" name="id" className='justify-content-end float-right' onChange={(event) => setStudentId(event.target.value)}></input><br/><br/>

                            <label for="password">Password:</label>
                            <input type="password"  id="password" name="password" className='justify-content-end' onChange={(event) => setPassword(event.target.value)}></input><br/><br/>

                            <input type="submit" value="Login" className='login-button'></input>
                        </form>                        
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login;