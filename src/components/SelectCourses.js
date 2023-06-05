import '../CSS/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //Import bootstrap
import NavSelect from './NavSelect';
import NavSmSelect from './NavSmSelect'


const SelectCourses = () => {

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
                        <input type="text" id="id" name="id" className='justify-content-end float-right'></input><br/><br/>

                        <label for="password" className='search-label'>Search for:</label>
                        <input type="text" id="password" name="password" className='justify-content-end'></input><br/><br/>

                        <input type="button" value="Show Courses" className='courses'></input>
                    </form>    
                </div>
            </div>
            <div className='bg-blue search-form'>
                <div className='border-courses'>
                    <div className="blue-border">
                        <form className='course-form'>
                                <input class="form-check-input" type="checkbox" id="checkbox1" value=""></input>
                                <label class="form-check-label" for="checkbox1">CSE101</label><br/>

                                <input type="button" value="Register" className='register'></input>
                        </form>    
                    </div>
                </div>
            </div>
        </>
    );
}

export default SelectCourses;