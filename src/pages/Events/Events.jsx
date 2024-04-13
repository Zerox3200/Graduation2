import React, { useEffect, useState } from 'react'
import './Events.scss'
import { IoHome } from "react-icons/io5";
import UserPhoto from './../../Image/testimonials-1.jpg'
import { Link } from 'react-router-dom';
import EventsCards from './EventsCards/EventsCards';
import { UpComingEvents, Previous } from './EventFile';
import { MdOutlineMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdOutlineContactPhone } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";

export default function Events() {
    const [Active, setActive] = useState(true);
    const [Events, setEvents] = useState(UpComingEvents);
    const [SideNav, setSideNav] = useState(false);

    const Activation = () => {
        setActive(prevActive => !prevActive);
        setEvents(Active === true ? UpComingEvents : Active === false ? Previous : null);
    }

    const SideNavShow = () => {
        setSideNav(SideNav === true ? false : true)
    }

    useEffect(() => {
        setEvents(Active ? UpComingEvents : Previous);
    }, [Active]);
    return <>
        <div className={SideNav ? "Events_SideBar Show" : 'Events_SideBar'}>
            <IoClose className='position-absolute end-0 top-0 m-4 Close' onClick={() => SideNavShow()} />
            <h1 className='h2'>Events</h1>
            <Link className='h6 btn px-4' to='/'><IoHome /> Home</Link>
            <Link className='h6 btn px-4' to=''><CgProfile /> Profile</Link>
            <Link className='h6 btn px-4' to='/ContactUs'><MdOutlineContactPhone /> Contact Us</Link>
            <Link className='h6 btn px-4' to='/CameraMen'><IoPersonSharp /> Photographers</Link>
            <div className="User d-flex justify-content-start align-items-center column-gap-3 px-3">
                <img src={UserPhoto} alt=".." className='col-md-5' loading='lazy' />
                <div className="User_Details col-md-7">
                    <h1 className='h6 w-100'>Saul GoodMan</h1>
                    <span>Email123@gmail.com</span>
                </div>
            </div>
        </div >
        <div className='EventsPage'>
            <div className="Events_Details col-md-12">
                <div className="Events_Filters w-100 row justify-content-around align-content-center position-relative">
                    <MdOutlineMenu className='w-auto SideMenu'
                        onClick={() => SideNavShow()} />
                    <button className={Active ? 'btn col-md-3 Active' : 'btn col-md-3'}
                        onClick={() => Activation()}>UpComing Events</button>
                    <button className={Active ? 'btn col-md-3' : 'btn col-md-3 Active'}
                        onClick={() => Activation()}>Previous Events</button>
                </div>
                <div className="EventsCards col-md-12">
                    {Events?.map((Ele, index) => <EventsCards key={index}
                        Date={Ele.date} Desc={Ele.Desc} Photo={Ele.EventImage} Title={Ele.Title}
                        Location={Ele.location} Time={Ele.Time} />)}
                </div>
            </div>
        </div>
    </>
}
