import React from 'react';
import { motion } from 'framer-motion';
import './AddSkills.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { IoMdClose } from "react-icons/io";

export default function SkillsUpdate({ AddSkill }) {
    const Formik = useFormik({
        initialValues: {
            Skill: ''
        }, validationSchema: Yup.object({
            Skill: Yup.string().required('This field is required For Add your Skill')
        })
    });
    return <>
        <motion.div className="DropBoxSkills" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: 'linear' }}>
            <motion.form className='AddSkills p-4 row align-content-center row-gap-4 position-relative'
                onSubmit={Formik.handleSubmit} initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.8, type: 'spring' }}>
                <IoMdClose onClick={AddSkill} />
                <div>
                    <h1 className="form-label h4">New Skill</h1>
                    <input type="email" className="form-control" id="exampleInputEmail1" name='Skill'
                        aria-describedby="emailHelp" onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                    <span id="emailHelp" className="form-text fs-6 d-block mt-3" >
                        Your Skills will increase your opportunities for getting a task and make money when you finish you
                        can add more
                    </span>
                    {Formik.errors.Skill ? <span className='alert alert-danger d-block mt-3'>{Formik.errors.Skill}</span> : null}
                </div>
                <input type="submit" value="Add Skill" className='btn' />

            </motion.form>
        </motion.div>
    </>
}
