import './Forgetting.scss'
import { useFormik } from 'formik'
// import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

export default function Forgetting() {
    // const navigate = useNavigate();

    const Validation = Yup.object({
        Email: Yup.string().email("Email Should be like this : Ex123@email.com").required('Email is required')
    })

    const SendData = (values) => {
        console.log(values);
    }

    const Formik = useFormik({
        initialValues: {
            Email: ''
        }, validationSchema: Validation,
        onSubmit: SendData
    })
    return (
        <div className="ForgetPass">
            <h3>Forget Password</h3>
            <h5>Please enter your email below to receive
                your password reset instructions.</h5>
            <form onSubmit={Formik.handleSubmit}>
                <div className="ForgetForm">
                    <label htmlFor="Email">Email</label>
                    <input type="text" placeholder='Enter your email' id='Email' name='Email'
                        onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                    {Formik.errors.Email && Formik.touched.Email ?
                        <span className='alert alert-danger w-100 mt-3'>{Formik.errors.Email}</span> : null}
                </div>
                <div className="Submiting">
                    <button type='submit' to="">SendMail</button>
                </div>
            </form>
        </div>
    )
}