import React, { useState } from 'react'
import './EventsAdd.scss';
import { IoMdClose } from "react-icons/io";
import { motion } from 'framer-motion'
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function EventsAdd({ AddEventsShow }) {
    const [Image, setImage] = useState();

    const Validation = Yup.object({
        image: Yup.mixed()
            .test("File_Size", "Too large! (Maximum 5MB) or You didn't add image", (value) => value && value.size <= 5 * 1024 * 1024)
            .test("File_Type", "Invalid!! it's only png,jpeg,jpg",
                (value) => value && ['image/png', 'image/jpeg', 'image/jpg'].includes(value.type))
            .required("Add Image of the event is required"),
        Title: Yup.string().min(6, 'Minimum Length of Title is 6').max(30, 'Maximum Length of Title is 30')
            .required("Add Title of the event is required"),
        Date: Yup.string().required("Add Date of the event is required"),
        Bio: Yup.string().min(80, 'Minimum Length of Bio is 80').max(800, 'Maximum Length of Title is 800')
            .required("Add Bio of the event is required")
    });

    const Formik = useFormik({
        initialValues: {
            image: Image,
            Title: '',
            Date: '',
            Bio: ''
        }, onSubmit: (values) => {
            console.log(Image);
            console.log(values);
        }, validationSchema: Validation
    });

    const ImagePreview = (file) => {
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setImage(reader.result);
            }
        }
    }
    return <>
        <motion.div className='EvetsAddDropBox' initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: 'linear' }}>
            <motion.form className="EventsAdding p-4" initial={{ y: 20 }} animate={{ y: 0 }}
                transition={{ duration: 0.8, type: 'spring' }} onSubmit={Formik.handleSubmit}>
                <IoMdClose onClick={AddEventsShow} />
                <h1 className='h4'>Add Event</h1>
                <div className="EventsChange row align-items-center justify-content-center px-2 my-2" >
                    <div className="mt-4">
                        <input type="file" className="form-control w-100" id="inputGroupFile02" name='image'
                            onChange={(e) => {
                                Formik.setFieldValue('image', e.target.files[0]);
                                ImagePreview(e.target.files[0]);
                            }} />
                        {Image ? <img src={Image} loading='lazy' alt='...' className='mt-3' /> : null}
                        {Formik.errors.image ?
                            <span className='d-block alert alert-danger mt-2 w-100'>{Formik.errors.image}</span> : null}
                    </div>
                    <div className="mt-4">
                        <label className='form-label fs-3'>Title</label>
                        <input type="text" name="Title" className='form-control'
                            onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                        {Formik.errors.Title ?
                            <span className='d-block alert alert-danger mt-2 w-100'>{Formik.errors.Title}</span> : null}
                    </div>

                    <div className="mt-4">
                        <label className='form-label fs-3'>Date</label>
                        <input type="date" name="Date" className='form-control'
                            onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                        {Formik.errors.Date ?
                            <span className='d-block alert alert-danger mt-2 w-100'>{Formik.errors.Date}</span> : null}
                    </div>

                    <div className="mt-4">
                        <label className='form-label fs-3'>Bio</label>
                        <textarea type="text" name="Bio" className='form-control' rows='10'
                            onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                        {Formik.errors.Bio ?
                            <span className='d-block alert alert-danger mt-2 w-100'>{Formik.errors.Bio}</span> : null}
                    </div>
                    <input type="submit" value="Send Updates" disabled={!(Formik.dirty && Formik.isValid)} accept="image/*" />
                </div>
            </motion.form>
        </motion.div>
    </>
}
