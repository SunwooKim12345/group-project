import '../CSS/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //Import bootstrap

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

const Nav = () => {

    return (
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link active" href="#" onClick={add_active}>Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={add_active}>Instruction</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={add_active}>Login</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={add_active}>PreviousCourses</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={add_active}>SelectCourses</a>
                </li>
            </ul>
    );
}

export default Nav;