import img from '../../../src/assets/login.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './providers/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const LogIn = () => {
    const {logIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';



    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        logIn(email, password)
            .then((result) => {
                const user = result.user;
                navigate(from, { replace: true })
                form.reset();
            })
            .then((error) => {
                console.log(error.message)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200 text-black">
            <div className="hero-content flex-col lg:flex-row py-5">
                <div className="text-center lg:text-left w-1/2 mr-8">
                    <img src={img} alt="" />

                </div>
                <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100 ml-5">

                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <form onSubmit={handleLogIn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6 bg-[#FF3811] text-white py-2 rounded-xl">
                                <input type="submit" value="Log IN" />
                            </div>
                        </form>
                        <p>New to college booking ? <Link className='text-[#FF3811] font-semibold' to="/signup">Sign Up</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;