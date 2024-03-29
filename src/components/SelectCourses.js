import '../CSS/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //Import bootstrap
import NavSelect from './NavSelect';
import NavSmSelect from './NavSmSelect'
import { useState } from 'react';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import Course from './Course';


const SelectCourses = () => {

    const [ isClicked, setIsClicked ] = useState(false);
    const [ name, setName ] = useState('');
    const [ search, setSearch ] = useState('');
    const [ searchedResult, setSearchedResult ] = useState([]);
    const [ selectedCourses, setSelectedCourses ] = useState([]);
    const [ registeredCourse, setRegisteredCourse ] = useState([]);

    let courseCap = [];
    const handleCheckboxChange = ( event ) =>  {
        const { value, checked } = event.target;
        if ( checked ) {
            setSelectedCourses( ( selCourses ) => [...selCourses, value ]);
        } else {
            setSelectedCourses( ( selCourses ) => selCourses.filter((item)=> item !== value ));
        }
    };

    const handleSubmit = ( event ) => {
        event.preventDefault();
        console.log('Selected courses: ', selectedCourses );

        fetch("http://localhost:8080/coursePre")
        .then((response) => response.json())
        .then((data) => {
            
            let courses = Array.from(Object.values(data.courses));
            courses = courses.filter( (course) => selectedCourses.includes(course.course));

            const prevCourses = JSON.parse(Cookies.get('prevCourses'));

            console.log( prevCourses );
            console.log("hello");
            console.log( courses );
            
            let count = 0;
            for( let idx = 0; idx < courses.length; idx++ ) {
                if( !prevCourses.includes(courses[idx].coursePrereq) ) {
                    alert( courses[idx].course + " requires " + courses[idx].coursePrereq );

                    return;
                }

                // if( prevCourses.includes(courses[idx].course) ) {
                //     alert(courses[idx].course + " already completed! " );

                //     return;
                // }
            }

            for( let idx = 0; idx < selectedCourses.length; idx++ )  {
                if( prevCourses.includes(selectedCourses[idx]) ) {
                    alert(selectedCourses[idx] + " already completed! " );

                    return;
                }
            }
            let registered = '';

            for( let idx = 0; idx < selectedCourses.length; idx++ ) {
                registered += selectedCourses[idx] + " ";

                axios.post("http://localhost:8080/courseReg", {"studentId": Cookies.get("studentId"), "course": selectedCourses[idx]})
                .then( response => console.log( response.data ))
                .catch( error => console.error( error ) );
            }

            alert( "Courses Selected:\n" + registered );
            




        })
    }

    const result = () => {
        fetch("http://localhost:8080/courses")
        .then((response) => response.json())
        .then((data) => {
            
            let courses = Array.from(Object.values(data.courses));
    
            for( let idx = 0; idx <courses.length; idx++ ) {
                courseCap.push(new Course(courses[idx].course, 40 ));
            }

            setSearchedResult( courses );


            
        })
    }

    useEffect(() => {
        result();

        fetch("http://localhost:8080/courseReg")
        .then((response) => response.json())
        .then((data) => {

            
            setRegisteredCourse( Array.from(Object.values(data.student)) );
            
        })
    }, []);

    const formbox = () => {

        let maxCap = 40;


        
        let coursesToRender = searchedResult;

        if (search !== '') {
            coursesToRender = searchedResult.filter(course => course.courseName.toLowerCase().includes(search.toLowerCase()));
        }



        return coursesToRender.map((course) => 

               <div key={course.course} className="form-check">
                   <input
                       className="form-check-input"
                       type="checkbox"
                       id={course.course}
                       value={course.course}
                       onChange={handleCheckboxChange}
                   />
                   <label className="form-check-label" htmlFor={course.course}>
                       {course.course} : {course.courseName} - {cap(course.course)} of 40
                   </label>
                   <br />
               </div>         
               
        );
    }

    const cap = ( course ) => {
        let count = 0;

        for( let idx =0; idx < registeredCourse.length; idx++ ) {
            if( registeredCourse[idx].course == course) {
                count++;
            }
        }

        return 40 - count;
    }



    return(
        <>
            <div className='bg-transparent d-flex container h2 align-items-center justify-content-center'>CourseMan =&gt; Search/Register</div>
            <NavSelect className="lg-screen"/>
            <NavSmSelect classNAme='sm-screen' />
            <div className='bg-blue search-form'>
                <div className='h2 title'> Search Form</div>
                <div className='border-search'>
                    <form className='course-form'>
                        <label for="id" className='name-label'>Name:</label>
                        <input type="text" id="id" name="id" className='justify-content-end float-right' onChange={(event) => setName(event.target.value)}></input><br/><br/>

                        <label for="password" className='search-label'>Search for:</label>
                        <input type="text" id="password" name="password" className='justify-content-end' onChange={(event) => setSearch(event.target.value)}></input><br/><br/>

                        { !isClicked ? <input type="button" value="Show Courses" className='courses' onClick={() => setIsClicked(true)}></input> : <input type="button" value="Hide Courses" className='courses' onClick={() => setIsClicked(false)}></input> }
                    </form>    
                </div>
            </div>
            { isClicked && <div className='search-form'>
                <div className='border-courses'>
                    <div className="blue-border">
                        <div className='description'>{name} here are the courses you may select</div>
                        <form className='course-form' onSubmit={handleSubmit}>
                                {formbox()}
                                <input type="submit" value="Register" className='register d-flex justify-content-end'></input>
                        </form>    
                    </div>
                </div>
            </div>}
        </>
    );
}

export default SelectCourses;