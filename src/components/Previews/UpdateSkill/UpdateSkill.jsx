import React from 'react'
import './UpdateSkill.scss'
import { IoMdClose } from "react-icons/io";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';


export default function UpdateSkills({ UpdateSkill, Skills }) {
    const SendUpdates = (values) => {
        console.log(values);
    }

    const Validation = Yup.object({
        Skill: Yup.string().min(10).max(1000).required("This field is required")
    })

    const Formik = useFormik({
        initialValues: {
            Skill: ''
        },
        onSubmit: SendUpdates,
        validationSchema: Validation
    })
    return <>
        <motion.div className="DropBoxSkills2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: 'linear' }}>
            <motion.form className='UpdateSkill position-relative row justify-content-center align-items-center p-5'
                onSubmit={Formik.handleSubmit} initial={{ y: 20 }} animate={{ y: 0 }}
                transition={{ duration: 0.8, type: 'spring' }}>
                <IoMdClose onClick={UpdateSkill} />
                <div className='col-md-12 mt-4'>
                    <h1 className="form-label h4">Skills</h1>
                    <span className='form-text'>Please add [ - ] before every skill !!</span>
                    <textarea type="text" className="form-control" onChange={Formik.handleChange} rows="15"
                        onBlur={Formik.handleBlur} id="exampleInputEmail1" aria-describedby="emailHelp"
                        name="Skill" placeholder='Write the update of this skill....' defaultValue={Skills}
                    />
                </div>
                <input type="submit" value="Send Updates" className='btn mt-5'
                    disabled={!(Formik.dirty && Formik.isValid)} />
            </motion.form>
        </motion.div>
    </>
}
