import { Nav } from '../../components/Nav/Nav'
import './Login.scss'
import LoginImage from './../../Image/nathan-dumlao-McztPB7Uqx8-unsplash.jpg'
import { Link } from 'react-router-dom'
// import FacebookIcon from './../../Image/facebook (1).svg';
// import GoogleIcon from './../../Image/google (1).svg';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';

export default function Login() {
    const [Error, setError] = useState(null)

    const SendData = (values) => {
        console.log(values);
    }

    const Validation = Yup.object({
        email: Yup.string().email("Email Should be like this : Ex123@email.com").required('Email is required'),
        password: Yup.string().min(8).max(30, `Password must contain at least 
        8 characters`).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_-])[A-Za-z\d@$!%*?&_-]{8,}$/,
            `Password must contain at least one uppercase letter, 
            one lowercase letter`
        ).required('Passwod is required')
    })

    const Formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        }, onSubmit: SendData,
        validationSchema: Validation
    })
    const [ApperePassword, setApperePassword] = useState(false);
    return (
        <>
            <Nav BackGround={false} />
            <div className="login">
                <div className="login_pt1">
                    <motion.img src={LoginImage} alt="..." initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }} transition={{ duration: 0.5, type: "tween" }} loading='lazy' />
                </div>
                <div className="login_pt2">
                    <motion.form onSubmit={Formik.handleSubmit} className={Formik.errors ? 'Max' : null} initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }} transition={{ duration: 0.5, type: "tween", delay: 0.5 }} loading='lazy'>
                        {Error ? <span className='w-100 alert alert-danger m-3'>{Error}</span> : null}
                        <h3>Sign in</h3>

                        <div className="FormEmail">
                            <label htmlFor="Email">Email</label>
                            <input type="text" placeholder='Enter your email' id='Email' name='email'
                                onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                            {Formik.errors.email && Formik.touched.email ?
                                <span className='w-100 alert alert-danger mt-3'>{Formik.errors.email}</span> : null}
                        </div>

                        <div className="FormPassword mt-2">
                            <label htmlFor="password">Password</label>
                            <input type={ApperePassword ? "text" : "password"} placeholder='Enter your Password' id='password'
                                name='password' onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                            {Formik.errors.password && Formik.touched.password ?
                                <span className='w-100 alert alert-danger mt-3'>{Formik.errors.password}</span> : null}
                            {!ApperePassword ?
                                <VisibilityOffIcon onClick={() => setApperePassword(true)} />
                                : <RemoveRedEyeIcon onClick={() => setApperePassword(false)} />
                            }
                            <div className="row justify-content-between w-100 mt-2">
                                <Link className='col-md-5' to="/ForgetPassword" >Forget Password</Link>
                                <Link className='col-md-5' to="/ChangePassword" >Change Password</Link>
                            </div>
                        </div>

                        <button className='btn' type='submit'>Login</button>
                        <p>don't have account? <Link to="/SignUp">Sign up</Link></p>
                        <div className='FormLine'><span ></span>or<span ></span></div>
                        {/* <div className="formIcons">
                            <a href='https://www.facebook.com/'><img src={FacebookIcon} alt="" /></a>
                            <a href='mailto:ziadahmedsalah222@gmail.com'> <img src={GoogleIcon} alt="" /></a>
                        </div> */}
                    </motion.form>
                </div>
            </div>
        </>
    )
}