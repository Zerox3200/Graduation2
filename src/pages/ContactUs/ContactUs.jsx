import { Nav } from '../../components/Nav/Nav';
import './ContactUs.scss';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import { Footer } from '../../components/Footer/Footer';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';

export default function ContactUs() {

    const Validation = Yup.object({
        Name: Yup.string().min(4, 'Minimum length is 4').max(30, 'Maximum length is 30').required("Name is required"),
        Email: Yup.string().email("Email Should be like this : Ex123@email.com").required("Email is required"),
        Subject: Yup.string().min(4, 'Minimum length is 4').max(30, 'Maximum length is 30').required("Subject is required"),
        Message: Yup.string().required("Message is required"),
    })

    const SendMail = (values) => {
        console.log(values);
    }

    const Formik = useFormik({
        initialValues: {
            Name: '',
            Email: '',
            Subject: '',
            Message: ''
        },
        validationSchema: Validation,
        onSubmit: SendMail
    })
    return (
        <>
            <Nav BackGround={true} />
            <div className="ContactUs_intro">
                <h1>Contact Us</h1>
                <p>We're here to help you capture moments beautifully and effortlessly.
                    Whether you have questions about our services, want to discuss a potential collaboration,
                    or simply want to say hello, we'd love to hear from you. Feel free to reach out to us
                    via the contact form below, and we'll get back to you as soon as possible.
                </p>
            </div>
            <div className="Contact_Details">
                <div className="Contact_Details_pt1 container">
                    <motion.div className="Contact_Icons_pt1 bor" initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }} transition={{ type: 'spring', duration: 1 }}>
                        <LocationOnIcon />
                        <p>ADDRESS</p>
                        <span>A108 Adam Street, NY 535022, USA</span>
                    </motion.div>
                    <motion.div className="Contact_Icons_pt1 bor" initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }} transition={{ type: 'spring', duration: 1, delay: 0.2 }}>
                        <PhoneIphoneIcon />
                        <p>Phone</p>
                        <a href='https://wa.me/01030602579'>01030602579</a>
                    </motion.div>
                    <motion.div className="Contact_Icons_pt1" initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }} transition={{ type: 'spring', duration: 1, delay: 0.4 }}>
                        <EmailIcon />
                        <p>Email</p>
                        <a href="mailto:ziad.ahmed01020338066@gmail.com">CameraMan123@gmail.com</a>
                    </motion.div>
                </div>
                <form className="container" onSubmit={Formik.handleSubmit}>
                    <div className="SendName mt-2">
                        <input type="text" name="Name" placeholder='your Name'
                            onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                        {Formik.errors.Name && Formik.touched.Name ?
                            <span className='alert alert-danger d-block w-100 mt-2'>{Formik.errors.Name}</span> : null}
                    </div>

                    <div className="SendEmail mt-2">
                        <input type="text" name="Email" placeholder='your Email'
                            onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                        {Formik.errors.Email && Formik.touched.Email ?
                            <span className='alert alert-danger  d-block w-100 mt-2'>{Formik.errors.Email}</span> : null}
                    </div>
                    <div className="SendSubject mt-2">
                        <input type="text" name="Subject" placeholder='your Subject'
                            onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                        {Formik.errors.Subject && Formik.touched.Subject ?
                            <span className='alert alert-danger  d-block w-100 mt-2'>{Formik.errors.Subject}</span> : null}
                    </div>

                    <textarea name="Message" cols="30" rows="10" placeholder='Message'
                        onChange={Formik.handleChange} onBlur={Formik.handleBlur}>
                    </textarea>
                    {Formik.errors.Message && Formik.touched.Message ?
                        <span className='alert alert-danger  d-block w-100 mt-2'>{Formik.errors.Message}</span> : null}

                    <button className='btn' type='submit'>Send Message</button>
                </form>
            </div>
            <Footer />
        </>
    )
}
