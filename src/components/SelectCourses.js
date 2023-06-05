import '../CSS/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //Import bootstrap
import NavSelect from './NavSelect';
import NavSmSelect from './NavSmSelect'
import { useState } from 'react';
import { useEffect } from 'react';


const SelectCourses = () => {

    const [ isClicked, setIsClicked ] = useState(false);
    const [ name, setName ] = useState('');
    const [ search, setSearch ] = useState('');
    const [ searchedResult, setSearchedResult ] = useState([]);
    const [ selectedCourses, setSelectedCourses ] = useState([]);

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


            console.log("hello");
            console.log( courses );
        })
    }

    const result = () => {
        fetch("http://localhost:8080/courses")
        .then((response) => response.json())
        .then((data) => {
            
            let courses = Array.from(Object.values(data.courses));
    
            setSearchedResult( courses );
            
        })
    }

    useEffect(() => {
        result();
    }, []);

    const formbox = () => {
        let coursesToRender = searchedResult;

        if (search !== '') {
            coursesToRender = searchedResult.filter(course => course.courseName.includes(search));
        }

        return coursesToRender.map((course) => (
            <div key={course.course} className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id={course.course}
                    value={course.course}
                    onChange={handleCheckboxChange}
                />
                <label className="form-check-label" htmlFor={course.course}>
                    {course.course} : {course.courseName}
                </label>
                <br />
            </div>
        ));
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