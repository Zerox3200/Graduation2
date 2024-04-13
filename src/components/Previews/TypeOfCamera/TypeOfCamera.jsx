import React from 'react'
import './TypeOfCamera.scss'
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { IoMdClose } from "react-icons/io";
export default function TypeOfCamera({ UpdateCameraType }) {
    const Validation = Yup.object({
        Budget: Yup.string().required("For Update Camera Type it's required")
    })

    const SendUpdateBudget = (values) => {
        console.log(values);
    }

    const Formik = useFormik({
        initialValues: {
            CameraType: ''
        }, onSubmit: SendUpdateBudget
        , validationSchema: Validation
    })
    return (
        <motion.div className='CameraTypeDropBox' initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: 'linear' }}>
            <motion.form className='UpdateCameraType position-relative row justify-content-center align-items-center p-5'
                onSubmit={Formik.handleSubmit} initial={{ y: 20 }} animate={{ y: 0 }}
                transition={{ duration: 0.8, type: 'spring' }}>
                <IoMdClose onClick={UpdateCameraType} />
                <div className='col-md-12 mt-4'>
                    <h1 className="form-label h4">Camera Type</h1>
                    <input type="text" className="form-control my-3" onChange={Formik.handleChange}
                        onBlur={Formik.handleBlur} id="exampleInputEmail1" aria-describedby="emailHelp"
                        name="CameraType" placeholder='Add your Camera Type....'
                    />
                    {Formik.errors.Budget && <span className='alert alert-danger  d-block'>{Formik.errors.Budget}</span>}

                </div>
                <input type="submit" value="Send Updates" className='btn mt-2'
                    disabled={!(Formik.dirty && Formik.isValid)} />
            </motion.form>
        </motion.div>)
}
