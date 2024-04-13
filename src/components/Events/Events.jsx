import './Events.scss';
import { EventsCard } from './EventsCard/EventsCards';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { EventsSlider } from './EventsSlides';
import { useEffect, useState } from 'react';

export function Events() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        setWindowWidth(window.innerWidth)
    }, []);

    return (
        <>
            <div className="Events_Title">
                <span>Events</span>
                <p>Share Your Moments With Our Service</p>
            </div>
            <div className="Events">
                <Swiper
                    spaceBetween={1}
                    slidesPerView={windowWidth <= 991 ? 1 : windowWidth <= 1199 ? 2 : 3}
                    pagination={{ clickable: true }}
                    loop={true}
                    navigation={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false, }}
                    modules={[Autoplay, Pagination, Navigation]}
                >
                    {EventsSlider.map((ele) => {
                        return (
                            <SwiperSlide key={ele.id}>
                                <EventsCard Title={ele.title} Desc={ele.Desc} Min={ele.LastDate} Src={ele.Src} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </>
    )
}