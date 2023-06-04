import '../CSS/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //Import bootstrap
import { useState } from 'react';

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

const NavSm = () => {

    const [isClicked, setIsClicked] = useState(false);

    const open_menu = () => {
        setIsClicked( !isClicked );
    }

    return (
        <div className='sm-screen'>
        {!isClicked ? <button className='menu-button d-flex justify-content-center align-itmes-center' onClick={open_menu}>Menu</button> : 
        <button className='menu-button d-flex justify-content-center align-itmes-center' onClick={open_menu}>&times;</button>}
        {isClicked && <div className='d-flex container-fluid justify-content-end'>
            <ul className="nav nav-sm flex-column">
                <li className="nav-item">
                    <a className="nav-select nav-link active d-flex justify-content-center" href="#" onClick={add_active}>Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-select nav-link d-flex justify-content-center" href="#" onClick={add_active}>Instruction</a>
                </li>
                <li className="nav-item">
                    <a className="nav-select nav-link d-flex justify-content-center" href="#" onClick={add_active}>Login</a>
                </li>
                <li className="nav-item">
                    <a className="nav-select nav-link d-flex justify-content-center" href="#" onClick={add_active}>PreviousCourses</a>
                </li>
                <li className="nav-item">
                    <a className="nav-select nav-link d-flex justify-content-center" href="#" onClick={add_active}>SelectCourses</a>
                </li>
            </ul>
        </div>}
        </div>
    );
}

export default NavSm;