import '../CSS/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //Import bootstrap
import NavPrevCourses from './NavPrevCourses';
import { useState } from 'react';
import NavSmPrev from './NavSmPrev'
import Cookies from 'js-cookie';


const PreviousCourses = () => {

    const user = Cookies.get('studentId');
    const [ studentId, setStudentId ] = useState( user );

    const [ prevCourses, setPrevCourses ] = useState([]);

    const handleCheckboxChange = ( event ) =>  {
        const { value, checked } = event.target;
        if ( checked ) {
            setPrevCourses( ( prevCourses ) => [...prevCourses, value ]);
        } else {
            setPrevCourses( ( prevCourses ) => prevCourses.filter((item)=> item !== value ));
        }
    };

    const handleSubmit = ( event ) => {
        event.preventDefault();
        Cookies.set('prevCourses', JSON.stringify(prevCourses));
        console.log('Selected courses: ', prevCourses );
    }

    return (
        <>
            <div className='bg-transparent d-flex container text-white h2 align-items-center justify-content-center'>CourseMan!</div>
            <NavPrevCourses className="lg-screen"/>
            <NavSmPrev classNAme='sm-screen' />
            <div className='d-flex container text-black h2 align-items-center justify-content-center'>
                <div className='blur'>
                    Previous Courses
                </div>
            </div>
            <div className='container d-flex justify-content-center align-items-center'>
                <div className="content-box text-center">
                    <div className='bg-blue course-list'>

                        <div>Student ID: {studentId}</div>
                        <br/>

                        <div>Check off the courses you have completed with a C or better</div>
                        <br/>
                        <br/>

                        <form onSubmit={handleSubmit}>
                        <div class="container">
                            <div class="row">
                                <div class="col-form-3">
                                    <div class="form-check">
                                        <label class="form-check-label" for="checkbox1">CSE101</label>
                                        <input class="form-check-input" type="checkbox" id="checkbox1" onChange={handleCheckboxChange} value="CSE101"></input>
                                    </div>
                                </div>

                                <div class="col-form-3">
                                    <div class="form-check">
                                        <label class="form-check-label" for="checkbox2">CSE114</label>
                                        <input class="form-check-input" type="checkbox" id="checkbox2" onChange={handleCheckboxChange} value="CSE114"></input>
                                    </div>
                                </div>

                                <div class="col-form-3">
                                    <div class="form-check">
                                        <label class="form-check-label" for="checkbox3">CSE214</label>
                                        <input class="form-check-input" type="checkbox" id="checkbox3" onChange={handleCheckboxChange} value="CSE214"></input>
                                    </div>
                                </div>

                                <div class="col-form-3">
                                    <div class="form-check">
                                        <label class="form-check-label" for="checkbox4">CSE215</label>
                                        <input class="form-check-input" type="checkbox" id="checkbox4" onChange={handleCheckboxChange} value="CSE215"></input>

                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-form-3">
                                    <div class="form-check">
                                        <label class="form-check-label" for="checkbox5">CSE216</label>
                                        <input class="form-check-input" type="checkbox" id="checkbox5" onChange={handleCheckboxChange} value="CSE216"></input>
                                    </div>
                                </div>

                                <div class="col-form-3">
                                    <div class="form-check">
                                        <label class="form-check-label" for="checkbox6">CSE220</label>
                                        <input class="form-check-input" type="checkbox" id="checkbox6" onChange={handleCheckboxChange} value="CSE220"></input>
                                    </div>
                                </div>

                                <div class="col-form-3">
                                    <div class="form-check">
                                        <label class="form-check-label" for="checkbox7">CSE300</label>
                                        <input class="form-check-input" type="checkbox" id="checkbox7" onChange={handleCheckboxChange} value="CSE300"></input>
                                    </div>
                                </div>

                                <div class="col-form-3">
                                    <div class="form-check">
                                        <label class="form-check-label" for="checkbox8">CSE303</label>
                                        <input class="form-check-input" type="checkbox" id="checkbox8" onChange={handleCheckboxChange} value="CSE303"></input>

                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-form-3">
                                    <div class="form-check">
                                        <label class="form-check-label" for="checkbox9">CSE304</label>
                                        <input class="form-check-input" type="checkbox" id="checkbox9" onChange={handleCheckboxChange} value="CSE304"></input>
                                    </div>
                                </div>

                                <div class="col-form-3">
                                    <div class="form-check">
                                        <label class="form-check-label" for="checkbox10">CSE305</label>
                                        <input class="form-check-input" type="checkbox" id="checkbox10" onChange={handleCheckboxChange} value="CSE305"></input>
                                    </div>
                                </div>

                                <div class="col-form-3">
                                    <div class="form-check">
                                        <label class="form-check-label" for="checkbox11">CSE306</label>
                                        <input class="form-check-input" type="checkbox" id="checkbox11" onChange={handleCheckboxChange} value="CSE306"></input>
                                    </div>
                                </div>

                                <div class="col-form-3">
                                    <div class="form-check">
                                        <label class="form-check-label" for="checkbox12">CSE310</label>
                                        <input class="form-check-input" type="checkbox" id="checkbox12" onChange={handleCheckboxChange} value="CSE310"></input>

                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-form-3">
                                    <div class="form-check">
                                        <label class="form-check-label" for="checkbox13">CSE316</label>
                                        <input class="form-check-input" type="checkbox" id="checkbox13" onChange={handleCheckboxChange} value="CSE316"></input>
                                    </div>
                                </div>

                                <div class="col-form-3">
                                    <div class="form-check">
                                        <label class="form-check-label" for="checkbox14">CSE320</label>
                                        <input class="form-check-input" type="checkbox" id="checkbox14" onChange={handleCheckboxChange} value="CSE320"></input>
                                    </div>
                                </div>

                                <div class="col-form-3">
                                    <div class="form-check">
                                        <label class="form-check-label" for="checkbox15">CSE331</label>
                                        <input class="form-check-input" type="checkbox" id="checkbox15" onChange={handleCheckboxChange} value="CSE331"></input>
                                    </div>
                                </div>

                                <div class="col-form-3">
                                    <div class="form-check">
                                        <label class="form-check-label" for="checkbox16">CSE416</label>
                                        <input class="form-check-input" type="checkbox" id="checkbox16" onChange={handleCheckboxChange} value="CSE416"></input>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <br/>
                        <br/>
                        <button type="submit" class="btn btn-primary mt-3">Set previous Courses</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PreviousCourses;