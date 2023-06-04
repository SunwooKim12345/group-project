import '../CSS/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //Import bootstrap
import Nav from './Nav';
import NavSm from './NavSm'


const Instruction = () => {

    return (
        <>
            <div className='bg-transparent d-flex container text-white h2 align-items-center justify-content-center'>CourseMan!</div>
            <Nav className="lg-screen"/>
            <NavSm classNAme='sm-screen' />

            <div className='container d-flex justify-content-center align-items-center'>
                <div className="content-box text-center">
                    <div className='pre bg-skyblue-instruction'>First, proceed to 'Login' page and enter your 9 digit student id and your password. Click the 'Login' button to verify your
                                                                            password and save your student id for the session
                                        <br /><br />                                    
                                        Next, proceed to 'Enter Previous Courses'. Click on each course you have completed with a C or better grade. Click Set
                                                                                            Previous Courses.
                                        <br /><br />    
                                    Return to the home page and click 'Select Courses'. Enter your name and any search term to restrict course selections with the
                                                          provided string in the course name. This can be left blank to see all CSE courses.
                                        <br /><br />                   
                                    Click the checkbox by each course for which you would like to register. Click the Register button to register. If you are missing
                                        prerequisites, you must go back and select a different set of courses. In this case, click 'ok' on the alert box and try again.
                                        <br /><br />    
                                                            On Success, an alert box will indicate the courses for which you have registered.
                                                            
                    </div>
                </div>
            </div>

        </>
    )
}

export default Instruction;