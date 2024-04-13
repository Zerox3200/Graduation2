import React from 'react'
import './EventsDetails.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import EventImage from './../../../Image/pexels-jonas-von-werne-2893330.jpg'
import { Link } from 'react-router-dom';

export default function EventsDetails() {

    return <>
        <section className='Details_Nav row justify-content-between align-items-center w-100 px-4'>
            <h1 className='h2 col-md-3'>Event Details</h1>
            <span className='col-md-3 '><Link to='/Events' className='text-decoration-none'>Events</Link> / Event Details</span>
        </section>
        <section className="Details row px-5">
            <Swiper pagination={{ clickable: true, }} navigation={true} freeMode={true}
                modules={[Pagination, Navigation]} loop={true} className="mySwiper col-lg-6  col-md-12">
                <SwiperSlide><img src={EventImage} alt="..." srcSet="" loading='lazy' /></SwiperSlide>
                <SwiperSlide><img src={EventImage} alt="..." srcSet="" loading='lazy' /></SwiperSlide>
                <SwiperSlide><img src={EventImage} alt="..." srcSet="" loading='lazy' /></SwiperSlide>
                <SwiperSlide><img src={EventImage} alt="..." srcSet="" loading='lazy' /></SwiperSlide>

            </Swiper>
            <div className="Details_Desc col-lg-5 col-md-12 d-flex flex-column row-gap-3">
                <h1 className='h3'>Event Title</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum laboriosam est necessitatibus aut dolorum ab
                    fugit error itaque voluptates omnis veritatis nulla vitae,
                    asperiores recusandae ducimus voluptas quae nobis labore quo
                    quisquam iure. Possimus consequatur nesciunt dolores. Iste impedit
                    debitis doloribus veritatis quam totam reiciendis sit magnam minima
                    laborum ipsam accusantium, quia nihil perferendis est consectetur libero
                    beatae reprehenderit, fugit velit, vero animi modi laudantium voluptatibus!
                    Voluptatibus eos corporis quia distinctio eveniet mollitia ipsum quam ipsa natus
                    incidunt, asperiores magnam autem a voluptatum expedita eum iste commodi dignissimos!
                    Officia voluptatibus maiores autem. At necessitatibus qui est nostrum a itaque asperiores
                    veniam in totam cupiditate eligendi eum, magni dolor voluptatum mollitia optio assumenda
                    deleniti aspernatur. Ipsum officia placeat.</p>
                <p className="card-text"><small className="text-muted">3 May 2024</small></p>
                <p className='fw-bold'>Location: New York City</p>
                <p>Organization : Company X</p>
                {/* <button className='btn'>Visit Event Owner Company</button> */}
            </div>
        </section>
    </>
}
