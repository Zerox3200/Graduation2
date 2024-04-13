import './Change.scss'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useState } from 'react';

export default function ChangePassword() {
    const [ApperePassword, setApperePassword] = useState(false);
    const [ApperePassword2, setApperePassword2] = useState(false);

    const Validation = Yup.object({
        newPassword: Yup.string().min(8).max(30, `Password must contain at least 
        8 characters`).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_-])[A-Za-z\d@$!%*?&_-]{8,}$/,
            `Password must contain at least one uppercase letter, 
            one lowercase letter`
        ).required('Passwod is required'),
        confirm: Yup.string().oneOf([Yup.ref("newPassword")], 'Password should be matched')
            .required('confirm Password is required')
    });

    const SendData = (values) => {
        console.log(values);
    }

    const Formik = useFormik({
        initialValues: {
            newPassword: '',
            confirm: ''
        }, validationSchema: Validation,
        onSubmit: SendData

    })
    return (
        <div className="ChangePassword">
            <h3>Forget Password</h3>
            <h5>Please enter your email below to receive
                your password reset instructions.</h5>
            <form onSubmit={Formik.handleSubmit}>
                <div className="ChangeForm">
                    <label htmlFor="NewPassword">New Password</label>
                    <input type={ApperePassword ? "text" : "password"} placeholder='Enter your email' id='NewPassword' name='newPassword'
                        onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                    {Formik.errors.newPassword && Formik.touched.newPassword ?
                        <span className='alert alert-danger mt-3'>{Formik.errors.newPassword}</span> : null}
                    {!ApperePassword ?
                        <VisibilityOffIcon onClick={() => setApperePassword(true)} />
                        : <RemoveRedEyeIcon onClick={() => setApperePassword(false)} />
                    }
                </div>

                <div className="ChangeForm">
                    <label htmlFor="Confirm">Confirm New Password</label>
                    <input type={ApperePassword2 ? "text" : "password"} placeholder='Enter your email' id='Confirm'
                        onChange={Formik.handleChange} onBlur={Formik.handleBlur} name='confirm' />
                    {Formik.errors.confirm && Formik.touched.confirm ?
                        <span className='alert alert-danger mt-3'>{Formik.errors.confirm}</span> : null}
                    {!ApperePassword2 ?
                        <VisibilityOffIcon onClick={() => setApperePassword2(true)} />
                        : <RemoveRedEyeIcon onClick={() => setApperePassword2(false)} />
                    }
                </div>

                <div className="Submitting">
                    <button type='submit' className='btn'>Change Password</button>
                </div>
            </form>
        </div>
    )
}