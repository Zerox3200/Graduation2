import React, { useState } from 'react';
import './ImageUpdate.scss';
import { IoMdClose } from "react-icons/io";
import UploadPhoto from '../../../Image/Screen_Shot_2022-04-15_at_10.17.44_AM-removebg-preview.png';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion'

export default function ImageUpdate({ UpdateImage, OldImage }) {
    const [Image, setImage] = useState(UploadPhoto);

    const ImagePreview = (file) => {
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setImage(reader.result);
            }
        }
    }

    const Validation = Yup.object({
        image: Yup.mixed()
            .test("File_Size", "Too large!", (value) => value && value.size < 1024 * 1024)
            .test("File_Type", "Invalid!!", (value) => value && ['image/png', 'image/jpeg', 'image/jpg'].includes(value.type))
    })

    const Formik = useFormik({
        initialValues: {
            image: ''
        }, onSubmit: (values) => {
            console.log(Image);
            console.log(values);
        }, validationSchema: Validation
    })
    return <>
        <motion.div className="DropBox" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: 'linear' }}>
            <motion.form onSubmit={Formik.handleSubmit}
                className='ImageUpdate row align-content-around justify-content-evenly p-2 position-relative'
                initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.8, type: 'spring' }}>
                <IoMdClose onClick={UpdateImage} />
                <h1 className='col-md-12 h4'>Edit Profile Image</h1>
                <div className="ImageUpdate_Old col-md-5 d-flex flex-column justify-content-center align-items-center p-2 row-gap-2">
                    <img src={OldImage} alt="..." loading='lazy' />
                    <p className='h4'>Old Profile Image</p>
                </div>
                <div className="ImageUpdate_New col-md-5 d-flex flex-column justify-content-center align-items-center p-2 row-gap-2">
                    <img src={Image} alt="..." loading='lazy' />
                    <p className='h4'>Upload Image</p>
                    {Formik.errors.image ? <span className='alert alert-danger w-100'>{Formik.errors.image}</span> : null}
                    <input className="form-control" name='Image' type="file" id="formFile"
                        onChange={(e) => {
                            Formik.setFieldValue('image', e.target.files[0]);
                            ImagePreview(e.target.files[0]);
                        }} />
                </div>
                <input type='submit' className='btn' value='Upload Image' accept="image/*" />
            </motion.form>
        </motion.div>
    </>

}
