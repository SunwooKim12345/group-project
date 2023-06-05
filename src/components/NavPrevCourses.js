import '../CSS/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //Import bootstrap
import { Link, useLocation } from 'react-router-dom';

const NavPrevCourses = () => {

    return (
        <div className='lg-screen'>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <Link className="nav-link" to="/" >Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/instruction" >Instruction</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login" >Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/previous-courses" >PreviousCourses</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/select-courses" >SelectCourses</Link>
                </li>
            </ul>
        </div>
    );
}

export default NavPrevCourses;