import {  useState } from 'react';
import { motion } from 'framer-motion'
import { IoClose } from "react-icons/io5";
import tempProfile from "../../assets/profiletemp.png";
import './auth.css';
import { Link, Navigate} from 'react-router-dom';
import RegImg from "../../assets/img-1.png"
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../redux/actions/signUpAction';
import Loader from '../../components/Loader/Loader';



const containerVeriance = {
    initial: {
        opacity: 0,
        y: -21
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .3,
            staggerChildren: .1,
        }
    }
}

function Register() {
    const [image, setImage] = useState('')
    const [signUpData, setSignUpData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const dispatch = useDispatch()
    const { loading, userCreated } = useSelector(state => state.signup)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setSignUpData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()

        formData.append('name', signUpData.name)
        formData.append('email', signUpData.email)
        formData.append('password', signUpData.password)
        formData.append('file', image)
        console.log(formData.values)
        dispatch(signUp(formData))
    }

    if (userCreated) {
        return <Navigate to={'/login'} />
    }

    if (loading) {
        return <Loader/>
    }


    return (
        <div className='auth-body'>
            <div className="notise">
           <p className="text-danger">
              <b>NOTE:</b> This webiste only for testing purpose no need use
              personal details.{" "}
            </p>
            <p className="text-danger">
                <b>USE:</b> Email : <span className="text-black">user@gmail.com</span> and pass : <span className="text-black">user@123</span>.
              </p>
      </div>
            <div className="auth-container">
                <Link to={'/'}>
                    <div className="auth-close-btn">
                        <IoClose />
                    </div>
                </Link>
                <motion.div className="auth-form"
                    variants={containerVeriance}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2
                        variants={containerVeriance}
                    >
                        Create account
                    </motion.h2>
                    <motion.form
                        variants={containerVeriance}
                        onSubmit={handleFormSubmit}
                    >

                        <div className="profile-sec-i">
                            <p className={image ? "d-none" : "d-block"}>Select Profile</p>
                            <label htmlFor="profile" className='profile-label'
                                variants={containerVeriance}
                            >{
                                    image ? <img src={URL.createObjectURL(image)} /> : <img src={tempProfile} />
                                }
                                <input type="file"
                                    name='file'
                                    id='profile'
                                    accept='image/*'
                                    onChange={(e) => {
                                        const file = e.target.files[0]
                                        setImage(file)
                                    }}
                                />

                            </label>
                        </div>


                        <br />

                        <motion.div className='inputField'
                            variants={containerVeriance}
                        >
                            <input
                                placeholder='Name'
                                autoComplete='off'
                                required
                                type="text"
                                name='name'
                                id='name'
                                value={signUpData.name}
                                onChange={handleInputChange}
                            />
                        </motion.div>

                        <br />

                        <motion.div className='inputField'
                            variants={containerVeriance}
                        >
                            <input
                                placeholder='Email'
                                required
                                type="email"
                                name='email'
                                id='email'
                                autoCapitalize='off'
                                value={signUpData.email}
                                onChange={handleInputChange}
                            />
                        </motion.div>

                        <br />

                        <motion.div className='inputField'
                            variants={containerVeriance}
                        >

                            <input
                                required
                                placeholder='Password'
                                autoComplete='off'
                                type="text"
                                name='password'
                                id='password'
                                value={signUpData.password}
                                onChange={handleInputChange}
                            />
                        </motion.div>

                        <Link to={'/forgot'}
                        >
                            Forgot password?
                        </Link>

                        <button
                            type='submit'
                        >
                            Sign Up
                        </button>

                        <p
                        >Have an account?
                            <span className='ms-1'>
                                <Link to={"/login"}>
                                    Log in
                                </Link>
                            </span>
                        </p>

                    </motion.form>
                </motion.div>
                <div className="auth-picture">
                    <img src={RegImg} />
                </div>
            </div>
        </div>
    )
}

export default Register