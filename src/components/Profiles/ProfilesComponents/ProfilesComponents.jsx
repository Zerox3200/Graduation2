import React, { useState } from 'react'
import './ProfilesComponents.scss';
import ProfilePhoto from '../../../Image/testimonials-2.jpg'
import { FaStar } from "react-icons/fa";
// import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useAnimate } from 'framer-motion';

export default function ProfilesComponents() {
    const [Details, animate] = useAnimate();
    const [GetDetails, setGetDetails] = useState(true)

    const ShowDetails = () => {
        setGetDetails(prevGetDetails => !prevGetDetails);
        if (GetDetails) {
            animate(Details.current, {
                height: 'auto',
            }, { duration: 0.5, type: 'tween' })
        } else {
            animate(Details.current, {
                height: 0
            }, { duration: 0.5, type: 'tween' })
        }
    }

    return (
        <div className='ProfilesComponent w-100'>
            <div className="ProfilesComponent_Title">
                <div className="ProfilesComponent_Title_1 d-flex align-items-center flex-wrap column-gap-3 p-3">
                    <img src={ProfilePhoto} alt="..." loading='lazy' className='col-md-3' />
                    <div className="RatingAndName col-md-9 px-2">
                        <h1 className='h6'>John Doe</h1>
                        <div>
                            <div className='col-md-6'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <span className='col-md-3 fw-bold'>100%</span>
                        </div>
                    </div>
                </div>
                <div className="ProfilesComponent_Title_2 row w-100 justify-content-between align-items-center px-3">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate alias
                        tempore impedit maxime nesciunt. Sapiente, fuga, ipsam quo ab ut consectetur
                        incidunt tenetur veritatis fugiat quam pariatur nostrum culpa sint.
                    </p>
                    <span className={!GetDetails ? 'Look' : null} onClick={() => ShowDetails()}><IoIosArrowForward /></span>
                </div>
            </div>
            <div className="ProfilesComponent_Details w-100 row column-gap-4" ref={Details}>
                <div className="ProfilesComponent_Details_Main d-flex flex-column col-xl-4 col-md-4 px-4 py-3">
                    <img src={ProfilePhoto} alt="..." loading='lazy' className='align-self-center' />
                    <div className="d-flex flex-column justify-content-center mt-3 row-gap-2">
                        <div className="d-flex align-items-center justify-content-center column-gap-5 w-100">
                            <div className=''>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <span className='fw-bold'>214 Rate</span>
                        </div>
                        <div className="Trust d-flex justify-content-center align-items-center column-gap-3">
                            <div className="Loading">
                                <span style={{ width: `80%` }}></span>
                            </div>
                            <p className='m-0 fw-bold'>80% trust</p>
                        </div>
                    </div>
                </div>
                <div className="ProfilesComponent_Details_Details d-flex flex-column justify-content-evenly">
                    <article>
                        <h1 className='h4'>Anne Maria</h1>
                        <span className='opacity-75'>Photographer</span>
                    </article>
                    <article className='d-flex flex-column'>
                        <p><b>Date of Birth: </b>5 Feb , 2001</p>
                        <p><b>Mobile Number: </b>01030602579</p>
                        <p><b>Email Address: </b>Anne@gmail.com</p>
                    </article>
                </div>
                <div className="ProfilesComponent_Footer w-100 d-flex align-items-center column-gap-3  px-3">
                    <button className='btn'>Book</button>
                    <Link className='btn' to='1'>View</Link>
                </div>
            </div>
        </div>
    )
}
