import React from 'react'
import './EventsCards.scss';
import { MdOutlineDescription } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function EventsCards({ Photo, Title, Desc, Date, Time, Location }) {
    return <>
        <div className="card mb-3 EventsCard col-md-12 mt-3 position-relative">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={Photo} className="img-fluid rounded-start" alt="..." loading='lazy' />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h1 className="card-title h3">{Title}</h1>
                        <span className='card-text text-muted'>{Time}</span>
                        <p className='card-text mt-2 mb-0 fw-bold'>{Location}</p>
                        <p className="card-text">{Desc}</p>
                        <p className="card-text"><small className="text-muted">{Date}</small></p>

                    </div>
                    <div className="px-3">
                        <Link to='2' className='h6 text-decoration-none d-flex align-items-center'>
                            View Event Details <MdOutlineDescription className='mx-3' /></Link>
                    </div>
                </div>
            </div>
        </div>
    </>
}
