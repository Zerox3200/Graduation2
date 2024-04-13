import React, { useState } from 'react'
import './UpdatePersonalinfromation.scss';
import { motion } from 'framer-motion';
import { IoMdClose } from "react-icons/io";
import * as Yup from 'yup';
import { useFormik } from 'formik';

export default function UpdatePersonalinfromation({ UpdatePersonalinfromationFunction }) {
    const [ChooseUpdate, setChooseUpdate] = useState('Name');
    const [Error, setError] = useState(false);
    let PersonalInfromation = [
        { Key: 1, Type: "Name" },
        { Key: 2, Type: "Bio" },
        { Key: 3, Type: "Location" },
        { Key: 4, Type: "Phone" },
        { Key: 5, Type: "Email" },
        { Key: 6, Type: "BirthDay" }
    ];


    const Validation = Yup.object({
        Name: Yup.string().min(5, 'Minimum length of user name is 5'),
        Bio: Yup.string().min(60, 'Minimum length of Bio is 60').max(500, "Maximum length of Bio is 500"),
        Location: Yup.string(),
        Phone: Yup.string().matches(/^01[0125][0-9]{8}/, "Add Egyption number please"),
        Email: Yup.string().email("Email Should be like this : Ex123@email.com"),
        BirthDay: Yup.string(),
    })

    const SendPersonalUpdate = (values) => {
        console.log(values);
    }

    const Formik = useFormik({
        initialValues: {},
        onSubmit: SendPersonalUpdate,
        validationSchema: Validation
    });

    const HandleUpdate = (Key) => {
        if (Formik.dirty) {
            setError(true)
            return;
        } else {
            setError(false)
            setChooseUpdate(Key)
        }

    }
    return (
        <motion.div className='UpdatePersonalinfromationDrobBox' initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: 'linear' }}>
            <motion.div className="UpdatePersonalinfromation" initial={{ y: 20 }} animate={{ y: 0 }}
                transition={{ duration: 0.8, type: 'spring' }}>
                <motion.form className='UpdatePersonalinfromation position-relative row justify-content-center align-items-center p-5'
                    initial={{ y: 20 }} animate={{ y: 0 }} onSubmit={Formik.handleSubmit}
                    transition={{ duration: 0.8, type: 'spring' }}>
                    <IoMdClose onClick={UpdatePersonalinfromationFunction} />
                    <div className="ListOfPersonalUpdate w-100 row gap-2 justify-content-center">
                        {PersonalInfromation.map((ele, index) =>
                            <span onClick={() => HandleUpdate(ele.Type)} key={index}>{ele.Type}</span>)
                        }
                    </div>
                    <div className='col-md-12 mt-4'>
                        <h1 className="form-label h4">{ChooseUpdate}</h1>
                        {ChooseUpdate === "Bio" ?
                            <textarea type="text" className="form-control" onChange={Formik.handleChange} rows="15"
                                onBlur={Formik.handleBlur} id="exampleInputEmail1" aria-describedby="emailHelp"
                                name={`${ChooseUpdate}`} placeholder='Write the update of this skill....'
                            /> : ChooseUpdate === "BirthDay" ? <input type="date" className="form-control my-3"
                                id="exampleInputEmail1" aria-describedby="emailHelp" onChange={Formik.handleChange}
                                onBlur={Formik.handleBlur} name={`${ChooseUpdate}`} placeholder={`Enter your new ${ChooseUpdate}....`}
                            /> : <input type="text" className="form-control my-3" onChange={Formik.handleChange}
                                onBlur={Formik.handleBlur} id="exampleInputEmail1" aria-describedby="emailHelp"
                                name={`${ChooseUpdate}`} placeholder={`Enter your new ${ChooseUpdate}....`}
                            />
                        }
                        {Formik.errors.Name &&
                            <span className='alert alert-danger  d-block'>{Formik.errors.Name}</span>}
                        {Formik.errors.Bio &&
                            <span className='alert alert-danger d-block mt-3'>{Formik.errors.Bio}</span>}
                        {Formik.errors.BirthDay &&
                            <span className='alert alert-danger  d-block'>{Formik.errors.BirthDay}</span>}
                        {Formik.errors.Email &&
                            <span className='alert alert-danger  d-block'>{Formik.errors.Email}</span>}
                        {Formik.errors.Location &&
                            <span className='alert alert-danger  d-block'>{Formik.errors.Location}</span>}
                        {Formik.errors.Phone &&
                            <span className='alert alert-danger  d-block'>{Formik.errors.Phone}</span>}

                        {Error &&
                            <span className='alert alert-danger  d-block'>Finish your update first please</span>
                        }

                    </div>
                    <input type="submit" value="Send Updates" className='btn mt-2'
                        disabled={!(Formik.dirty && Formik.isValid)} />
                </motion.form>
            </motion.div>
        </motion.div>
    )
}
