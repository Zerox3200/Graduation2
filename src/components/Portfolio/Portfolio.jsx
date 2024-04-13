import './Portfoilio.scss';
import StarIcon from './star-solid.svg';
import RightSemi from './quote-right-solid.svg';
import LeftSemi from './quote-left-solid.svg'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Photographers } from './ProtfolioData';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function Portfoilio() {
    const ref = useRef();
    const InView = useInView(ref, { once: true })
    return (
        <div className="Portfoilio">
            <motion.div className="Portfoilio_pt1" initial={{ opacity: 0, y: 50 }} ref={ref}
                animate={InView && { opacity: 1, y: 0 }} transition={{ duration: 0.6, type: "just" }}>
                <h2>Protfolios</h2>
                <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur, Excepteur sint occaecat cupidatat non proident.
                </p>
            </motion.div>
            <motion.div className="Portfoilio_pt2" initial={{ opacity: 0, y: 50 }}
                animate={InView && { opacity: 1, y: 0 }} transition={{ duration: 0.6, type: "just", delay: 0.3 }} >
                <Splide aria-label="My Favorite Images" options={{
                    arrows: false,
                    type: 'loop',
                    perPage: 1,
                    autoplay: true
                }}>
                    {Photographers.map((ele) => {
                        return <SplideSlide key={ele.id}>
                            <div className="Portfoilio_pt2_Info" >
                                <img src={ele.src} alt="" />
                                <div className="Image_Info">
                                    <div className="Image_Info_text">
                                        <h6>{ele.name} </h6>
                                        <span>{ele.title}</span>
                                    </div>
                                    <div className="Image_into_Stars">

                                        {Array.from({ length: ele.rate }, (_, index) => (
                                            <img key={index} src={StarIcon} alt="..." loading='lazy' />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="Portfoilio_pt2_Bio">
                                <p>
                                    <img src={LeftSemi} alt="..." className='LeftImage' loading='lazy' />
                                    {ele.Desc}
                                    <img src={RightSemi} alt="..." className='RightImage' loading='lazy' />
                                </p>
                            </div>
                        </SplideSlide>
                    })}
                </Splide>
            </motion.div>

        </div>
    )
}