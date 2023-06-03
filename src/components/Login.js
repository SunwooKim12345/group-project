import '../CSS/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //Import bootstrap
import Nav from './Nav';

const Login = () => {

    return (
        <>
            <div className='bg-transparent d-flex container text-white h2 align-items-center justify-content-center'>CourseMan!</div>
            <Nav />
            <div className='container d-flex justify-content-center align-items-center'>
                <div className="content-box text-center">
                    <div className='bg-blue login'>
                        <div className='bg-transparent d-flex container h2 align-items-center justify-content-center'>Login Form</div>
                        <form>
                            <label for="id">ID:</label>
                            <input type="text" id="id" name="id" className='justify-content-end'></input><br/><br/>

                            <label for="password">Password:</label>
                            <input type="text" id="password" name="password"></input><br/><br/>

                            <input type="submit" value="Login" className='login-button'></input>
                        </form>                        
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login;