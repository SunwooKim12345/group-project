import '../CSS/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //Import bootstrap
import { Link } from 'react-router-dom';

const remove_active = () => {
    const links = document.getElementsByClassName('nav-link');

    for( let idx = 0; idx < links.length; idx++ ) {
        links[idx].classList.remove('active');
    }
}

const add_active = ( event ) => {
    
    remove_active();
    event.target.classList.add('active');
}

const NavSelect = () => {

    return (
        <div className='lg-screen container-fluid'>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link className="nav-select nav-link" to="/" onClick={add_active}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-select nav-link" to="/instruction" onClick={add_active}>Instruction</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-select nav-link" to="/login" onClick={add_active}>Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-select nav-link" to="/previous-courses" onClick={add_active}>PreviousCourses</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-select nav-link active" to="/select-courses" onClick={add_active}>SelectCourses</Link>
                </li>
            </ul>
        </div>
    );
}

export default NavSelect;