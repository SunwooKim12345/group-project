import '../CSS/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //Import bootstrap
import Nav from './Nav';
import { useState } from 'react';

const PreviousCourses = () => {

    const [ studentId, setStudentId ] = useState('123456789');

    return (
        <>
            <div className='bg-transparent d-flex container text-white h2 align-items-center justify-content-center'>CourseMan!</div>
            <Nav />
            <div className='d-flex container text-black h2 align-items-center justify-content-center'>
                <div className='blur'>
                    Previous Courses
                </div>
            </div>
            {/* <div className='container d-flex justify-content-center align-items-center'>
                <div className="content-box text-center">
                </div>
            </div> */}
            <div className='container d-flex justify-content-center align-items-center'>
                <div className="content-box text-center">
                    <div className='bg-blue course-list'>

                        <div>Student ID: {studentId}</div>
                        <br/>

                        <div>Check off the courses you have completed with a C or better</div>
                        <br/>
                        <br/>

                        <form>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-3">
                                    <div class="form-check">
                                        <label class="form-check-label" for="checkbox1">CSE101</label>
                                        <input class="form-check-input" type="checkbox" id="checkbox1" value=""></input>
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div class="form-check">
                                        <label class="form-check-label" for="checkbox2">CSE114</label>
                                        <input class="form-check-input" type="checkbox" id="checkbox2" value=""></input>
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div class="form-check">
                                        <label class="form-check-label" for="checkbox3">CSE214</label>
                                        <input class="form-check-input" type="checkbox" id="checkbox3" value=""></input>
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div class="form-check">
                                        <label class="form-check-label" for="checkbox4">CSE215</label>
                                        <input class="form-check-input" type="checkbox" id="checkbox4" value=""></input>

                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-3">
                                    <div class="form-check">
                                        <label class="form-check-label" for="checkbox5">CSE216</label>
                                        <input class="form-check-input" type="checkbox" id="checkbox5" value=""></input>
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div class="form-check">
                                        <label class="form-check-label" for="checkbox6">CSE220</label>
                                        <input class="form-check-input" type="checkbox" id="checkbox6" value=""></input>
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div class="form-check">
                                        <label class="form-check-label" for="checkbox7">CSE300</label>
                                        <input class="form-check-input" type="checkbox" id="checkbox7" value=""></input>
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div class="form-check">
                                        <label class="form-check-label" for="checkbox8">CSE303</label>
                                        <input class="form-check-input" type="checkbox" id="checkbox8" value=""></input>

                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3">
                                    <div class="form-check">
                                        <label class="form-check-label" for="checkbox9">CSE304</label>
                                        <input class="form-check-input" type="checkbox" id="checkbox9" value=""></input>
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div class="form-check">
                                        <label class="form-check-label" for="checkbox10">CSE305</label>
                                        <input class="form-check-input" type="checkbox" id="checkbox10" value=""></input>
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div class="form-check">
                                        <label class="form-check-label" for="checkbox11">CSE306</label>
                                        <input class="form-check-input" type="checkbox" id="checkbox11" value=""></input>
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div class="form-check">
                                        <label class="form-check-label" for="checkbox12">CSE310</label>
                                        <input class="form-check-input" type="checkbox" id="checkbox12" value=""></input>

                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3">
                                    <div class="form-check">
                                        <label class="form-check-label" for="checkbox13">CSE316</label>
                                        <input class="form-check-input" type="checkbox" id="checkbox13" value=""></input>
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div class="form-check">
                                        <label class="form-check-label" for="checkbox14">CSE320</label>
                                        <input class="form-check-input" type="checkbox" id="checkbox14" value=""></input>
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div class="form-check">
                                        <label class="form-check-label" for="checkbox15">CSE331</label>
                                        <input class="form-check-input" type="checkbox" id="checkbox15" value=""></input>
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div class="form-check">
                                        <label class="form-check-label" for="checkbox16">CSE416</label>
                                        <input class="form-check-input" type="checkbox" id="checkbox16" value=""></input>

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