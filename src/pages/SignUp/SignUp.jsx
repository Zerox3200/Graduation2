import './SignUp.scss';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function SignUp() {
    const [ApperePassword, setApperePassword] = useState(false);
    const [AppereConfirmPassword, setAppereConfirmPassword] = useState(false);

    const Validation = Yup.object({
        First_Name: Yup.string().min(3, 'Minimum length of name is 3').max(15, 'Maximum length of name is 15')
            .required('Name is required'),
        Last_Name: Yup.string().min(3, 'Minimum length of name is 3').max(15, 'Maximum length of name is 15')
            .required('Name is required'),
        Email: Yup.string().email("Email Should be like this : Ex123@email.com").required('Email is required'),
        Password: Yup.string().min(8).max(30, `Password must contain at least 
        8 characters`).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_-])[A-Za-z\d@$!%*?&_-]{8,}$/,
            `Password must contain at least one uppercase letter, 
            one lowercase letter`
        ).required('Passwod is required'),
        Phone: Yup.string().matches(/^01[0125][0-9]{8}/, "Add Egyption number please").required("Phone is required"),
        Confirm_Password: Yup.string().oneOf([Yup.ref("Password")], 'Should Match Main Password')
            .required("You should Confirm Password"),
        BirthDay: Yup.string().required('Date is required'),
        Address: Yup.string().required("Address is required"),
        Gender: Yup.string().oneOf(['male', 'female'], `It's only male or female`).required("Gender is Required"),
        Type: Yup.string().oneOf(['client', 'photographer'], `It's only client or photographer`).required("Your type is required")
    })

    const SendData = (values) => {
        console.log(values);
    }

    const Formik = useFormik({
        initialValues: {
            First_Name: '',
            Last_Name: '',
            Email: '',
            Phone: '',
            BirthDay: '',
            Address: '',
            Password: '',
            Confirm_Password: '',
            Gender: 'male',
            Type: "client"
        }, onSubmit: SendData,
        validationSchema: Validation
    })

    return (
        <div className="SingUp">
            <form onSubmit={Formik.handleSubmit}>
                <h3>Registration</h3>
                <div className="FirstName">
                    <label htmlFor="FirstName">First Name</label>
                    <input type="text" placeholder='Enter your First Name' id='FirstName' onChange={Formik.handleChange}
                        onBlur={Formik.handleBlur} name='First_Name' />
                    {Formik.touched.First_Name && Formik.errors.First_Name ?
                        <span className='alert alert-danger w-100 mt-3'>{Formik.errors.First_Name}</span> : null}
                </div>
                <div className="LastName">
                    <label htmlFor="LastName">Last Name</label>
                    <input type="text" placeholder='Enter your email' id='Last Name' onChange={Formik.handleChange}
                        onBlur={Formik.handleBlur} name='Last_Name' />
                    {Formik.touched.Last_Name && Formik.errors.Last_Name ?
                        <span className='alert alert-danger w-100 mt-3'>{Formik.errors.Last_Name}</span> : null}
                </div>
                <div className="Email">
                    <label htmlFor="Email">Email</label>
                    <input type="text" placeholder='Enter your Email' id='Email' onChange={Formik.handleChange}
                        onBlur={Formik.handleBlur} name='Email' />
                    {Formik.touched.Email && Formik.errors.Email ?
                        <span className='alert alert-danger w-100 mt-3'>{Formik.errors.Email}</span> : null}
                </div>
                <div className="Phone">
                    <label htmlFor="Phone">Phone</label>
                    <input type="text" placeholder='Enter your Phone' id='Phone' onChange={Formik.handleChange}
                        onBlur={Formik.handleBlur} name='Phone' />
                    {Formik.touched.Phone && Formik.errors.Phone ?
                        <span className='alert alert-danger w-100 mt-3'>{Formik.errors.Phone}</span> : null}
                </div>
                <div className="BirthDay">
                    <label htmlFor="Phone">BirthDay</label>
                    <input type="date" id='BirthDay' onChange={Formik.handleChange}
                        onBlur={Formik.handleBlur} name='BirthDay' />
                    {Formik.touched.BirthDay && Formik.errors.BirthDay ?
                        <span className='alert alert-danger w-100 mt-3'>{Formik.errors.BirthDay}</span> : null}
                </div>
                <div className="Address">
                    <label htmlFor="Email">Address</label>
                    <input type="text" placeholder='Enter your Address' id='Address' onChange={Formik.handleChange}
                        onBlur={Formik.handleBlur} name='Address' />
                    {Formik.touched.Address && Formik.errors.Address ?
                        <span className='alert alert-danger w-100 mt-3'>{Formik.errors.Address}</span> : null}
                </div>
                <div className="Password">
                    <label htmlFor="Email">Password</label>
                    <input type={ApperePassword ? "text" : "password"} placeholder='Enter your Password' id='Password' onChange={Formik.handleChange}
                        onBlur={Formik.handleBlur} name='Password' />
                    {!ApperePassword ?
                        <VisibilityOffIcon onClick={() => setApperePassword(true)} />
                        : <RemoveRedEyeIcon onClick={() => setApperePassword(false)} />
                    }
                    {Formik.touched.Password && Formik.errors.Password ?
                        <span className='alert alert-danger w-100 mt-3'>{Formik.errors.Password}</span> : null}
                </div>
                <div className="ConfirmPassword">
                    <label htmlFor="ConfirmPassword">Confirm Password</label>
                    <input type={AppereConfirmPassword ? "text" : "password"} placeholder='Enter Confirmation' id='ConfirmPassword' onChange={Formik.handleChange}
                        onBlur={Formik.handleBlur} name='Confirm_Password' />
                    {!AppereConfirmPassword ?
                        <VisibilityOffIcon onClick={() => setAppereConfirmPassword(true)} />
                        : <RemoveRedEyeIcon onClick={() => setAppereConfirmPassword(false)} />
                    }
                    {Formik.touched.Confirm_Password && Formik.errors.Confirm_Password ?
                        <span className='alert alert-danger w-100 mt-3'>{Formik.errors.Confirm_Password}</span> : null}
                </div>
                <div className="Gender">
                    <label htmlFor="Gender">Gender</label>
                    <select name="Gender" id="Gender" onChange={Formik.handleChange}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    {Formik.touched.Gender && Formik.errors.Gender ?
                        <span className='alert alert-danger w-100 mt-3'>{Formik.errors.Gender}</span> : null}
                </div>
                <div className="ClientOrPhotogarpher">
                    <label htmlFor="Gender">Gender</label>
                    <select name="Type" id="Gender" onChange={Formik.handleChange}>
                        <option value="client">Client</option>
                        <option value="photographer">Photographer</option>
                    </select>
                    {Formik.touched.Gender && Formik.errors.Gender ?
                        <span className='alert alert-danger w-100 mt-3'>{Formik.errors.Gender}</span> : null}
                </div>
                <button type='submit' className='btn'>Sign Up</button>
            </form>
        </div>
    )
}