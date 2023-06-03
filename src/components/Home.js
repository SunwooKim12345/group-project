import '../CSS/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //Import bootstrap
import Nav from './Nav';


const Home = () => {

    return(
        <>
            <div className='bg-transparent d-flex container text-white h2 align-items-center justify-content-center'>CourseMan!</div>
            <Nav />
        </>
    );
}

export default Home;