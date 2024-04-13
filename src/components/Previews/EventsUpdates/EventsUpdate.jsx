import React, { useState } from 'react';
import './EventsUpdate.scss';
import { IoMdClose } from "react-icons/io";
import { motion } from 'framer-motion'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Events from '../../ProfileDetails/EventsFile';

export default function EventsUpdate({ UpdateEventsShow }) {
    const [Image, setImage] = useState();
    const [Event, setEvent] = useState(0);
    const [Updating, setUpdating] = useState('Image')

    const Validation = Yup.object({
        image: Yup.mixed()
            .test("File_Size", "Too large! (Maximum 5MB) or You didn't add image", (value) => value && value.size <= 5 * 1024 * 1024)
            .test("File_Type", "Invalid!! it's only png,jpeg,jpg",
                (value) => value && ['image/png', 'image/jpeg', 'image/jpg'].includes(value.type)),
        Title: Yup.string().min(6, 'Minimum Length of Title is 6').max(30, 'Maximum Length of Title is 30'),
        Date: Yup.string(),
        Bio: Yup.string().min(80, 'Minimum Length of Bio is 80').max(800, 'Maximum Length of Title is 800')
    });

    const Formik = useFormik({
        initialValues: {}, onSubmit: (values) => {
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

    const HandleFilter = (index) => {
        setEvent(index)
    }

    const HandleUpdating = (point) => {
        setUpdating(point);
    }
    return (
        <motion.div className='EvetsDropBox' initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: 'linear' }}>
            <motion.form className="EventsUpdate p-4" initial={{ y: 20 }} animate={{ y: 0 }}
                transition={{ duration: 0.8, type: 'spring' }} onSubmit={Formik.handleSubmit}>
                <IoMdClose onClick={UpdateEventsShow} />
                <h1 className='h4'>Upadte Events</h1>
                <div className="EventsFilter my-3 w-100 row justify-content-center align-items-center column-gap-3">
                    {Events.map((ele, index) => <span onClick={() => HandleFilter(index)}
                        className='col-md-1' key={ele.id}>{index + 1}</span>)}
                </div>
                <div className="EventsChange row align-items-center justify-content-center px-2 my-2" >
                    <img src={Image ? Image : Events[Event].ImageEvent} alt="..." loading='lazy' />
                    <div className="EventsChange_desc p-3">
                        <h2 className='h4'>{Events[Event].Title}</h2>
                        <span className='fw-bold'>{Events[Event].Date}</span>
                        <p className='m-0'>{Events[Event].desc}</p>
                    </div>
                    <div className="EditFilter w-100 row align-items-center justify-content-center column-gap-2 mt-2">
                        <span className='col-md-2' onClick={() => HandleUpdating("Image")}>Image</span>
                        <span className='col-md-2' onClick={() => HandleUpdating("Title")}>Title</span>
                        <span className='col-md-2' onClick={() => HandleUpdating("Date")}>Date</span>
                        <span className='col-md-2' onClick={() => HandleUpdating("Bio")}>Bio</span>
                    </div>
                    {Updating === "Image" ? <div className="mt-5">
                        <input type="file" className="form-control w-100" id="inputGroupFile02" name='image'
                            onChange={(e) => {
                                Formik.setFieldValue('image', e.target.files[0]);
                                ImagePreview(e.target.files[0]);
                            }} />
                        {Formik.errors.image ?
                            <span className='d-block alert alert-danger mt-2 w-100'>{Formik.errors.image}</span> : null}
                    </div> : null}

                    {Updating === "Title" ? <div className="mt-5">
                        <label className='form-label fs-3'>Title</label>
                        <input type="text" name="Title" className='form-control'
                            onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                        {Formik.errors.Title ?
                            <span className='d-block alert alert-danger mt-2 w-100'>{Formik.errors.Title}</span> : null}
                    </div> : null}

                    {Updating === "Date" ? <div className="mt-5">
                        <label className='form-label fs-3'>Date</label>
                        <input type="date" name="Date" className='form-control'
                            onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                        {Formik.errors.Date ?
                            <span className='d-block alert alert-danger mt-2 w-100'>{Formik.errors.Date}</span> : null}
                    </div> : null}

                    {Updating === "Bio" ? <div className="mt-5">
                        <label className='form-label fs-3'>Bio</label>
                        <textarea type="text" name="Bio" className='form-control' rows='10'
                            onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                        {Formik.errors.Bio ?
                            <span className='d-block alert alert-danger mt-2 w-100'>{Formik.errors.Bio}</span> : null}
                    </div> : null}

                    <input type="submit" value="Send Updates" accept="image/*" />
                </div>
            </motion.form>
        </motion.div>
    )
}
