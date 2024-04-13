import React, { useState } from 'react';
import './Profiles.scss';
import { Nav } from '../Nav/Nav';
import { useFormik } from 'formik';
import UserPhoto from './../../Image/testimonials-1.jpg'
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import ProfilesComponents from './ProfilesComponents/ProfilesComponents';

export default function Profiles() {
    const [SideNav, setSideNav] = useState(false);

    const Filtering = (values) => {
        console.log(values);
    }

    const Formik = useFormik({
        initialValues: {
            RangeNumber: '200',
            Rate: '5',
        }, onSubmit: Filtering
    });

    const ShowFilters = () => {
        setSideNav(SideNav === true ? false : true)
    }
    return <>
        <Nav BackGround={false} />
        {SideNav ? <div className="backdrop See"></div> : <div className="backdrop hide"></div>}
        <section className={SideNav ? "Profiles_filters p-3 Show" : 'Profiles_filters p-3'}>
            <h1 className='h3'>Filters</h1>
            <form onSubmit={Formik.handleSubmit} className='row px-3'>
                <h2 htmlFor="customRange1" className="form-label h5">Budget Range</h2>
                <input type="range" className="form-range px-2" id="customRange1" min='200' max='5000' name='RangeNumber'
                    onChange={Formik.handleChange} />
                <span className='w-100'>{Formik.values.RangeNumber}</span>
                <label htmlFor="Rating" className='mt-3 fw-bold form-label'>The Rate you want</label>
                <select className="form-select" aria-label="Default select example" name='Rate' onChange={Formik.handleChange}>
                    <option defaultValue>Photographers Rates</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                </select>
                <input type="submit" className='btn mt-5' value='Filter' />
            </form>
            <div className="User d-flex justify-content-start align-items-center column-gap-3 px-3">
                <img src={UserPhoto} alt=".." className='col-md-5' loading='lazy' />
                <div className="User_Details col-md-7">
                    <h1 className='h6 w-100'>Saul GoodMan</h1>
                    <span>Email123@gmail.com</span>
                </div>
            </div>
        </section>
        <section className='Profiles'>
            <div className="Profiles_Show py-2">
                <input type="text" placeholder='Find Your Photographer' />
                {SideNav ? <IoClose onClick={ShowFilters} className='Menu Close' /> :
                    <IoMdMenu onClick={ShowFilters} className='Menu' />}
                <IoSearchOutline className='Search' />
                <p className='Search_Details w-100 mt-4 px-3'>Finding the perfect camera man for your project is made easy on our freelance platform.
                    With our intuitive filtering system, you can refine your search based on a variety of
                    criteria such as location, expertise, availability, equipment, and budget. Whether you're
                    seeking a cinematographer proficient in aerial shots, a videographer skilled in documentary-style
                    filming, or a photographer specialized in portrait sessions, our robust filtering options allow you
                    to narrow down your choices and connect with professionals who best match your project requirements.
                    Say goodbye to endless scrolling and hello to efficiently finding the ideal camera man for your next
                    endeavor.
                </p>
                <ProfilesComponents />
                <ProfilesComponents />
                <ProfilesComponents />
            </div>
        </section>
    </>
}
