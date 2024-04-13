import { TypeAnimation } from 'react-type-animation';
import './Service.scss';
import CameraService from './../../Image/CameraService.jpg';
import EventService from './../../Image/Events.jpg';
import ClientService from './../../Image/businessmen-suits-seal-agreement-with-handshake-generated-by-ai.jpg';
import { ServiceCards } from './ServiceCards/ServiceCards';
import CameraVector from './../../Image/2771643.jpg';
import EventVector from './../../Image/2008.i121.014..isometric conference hall set-001.jpg'
import ClientVector from './../../Image/3572685.jpg'
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function Service() {
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const InView1 = useInView(ref1, { once: true })
    const InView2 = useInView(ref2, { once: true })
    const InView3 = useInView(ref3, { once: true })

    return (
        <>
            <div className="AboutUs_Title">
                <TypeAnimation
                    sequence={[
                        'In CameraMan we give you Trust',
                        1000,
                        'In CameraMan we give you Opportunities',
                        1000,
                        'In CameraMan we give you Improvement',
                        1000,
                    ]}
                    wrapper="h1"
                    speed={50}
                    repeat={Infinity}
                />
            </div>
            <div className="Service">
                <div className="Service_pt1 container">
                    <ServiceCards Src={CameraService} Title='Freelancers'
                        Description='Effortlessly find skilled camera professionals for your events. Streamlined process,
                         ratings, and reviews for informed decisions.' Delay='0' />
                    <ServiceCards Src={ClientService} Title='Clients' Description='Showcase your camera skills,
                     get matched with jobs, and ensure secure payments.
                    Join to access a world of freelance opportunities.' Delay='0.5' />
                    <ServiceCards Src={EventService} Title='Events' Description='Capture unforgettable moments with our
                     camera experts. Tailor services for weddings, corporate events.' Delay='0.8' />
                </div>
                <div className="Service_pt2">
                    <div className="Service_pt2_Descriptions">
                        <motion.img src={CameraVector} alt="..." initial={{ opacity: 0 }}
                            loading='lazy'
                            animate={InView1 && { opacity: 1 }}
                            ref={ref1}
                            transition={{ duration: 0.8, type: "tween" }} />
                        <div className="Service_pt2_Descriptions_paragraphs">
                            <h2>Freelance Photographers</h2>
                            <p>We thrive on solving intricate challenges for our clients by dedicating ourselves to the art of
                                freelancing. Our focus is unwavering in connecting skilled camera professionals with opportunities
                                that elevate their craft.
                            </p>
                            <p><b>CameraMan</b> consistently drives these meaningful outcomes in Photo Sessions for our clients,
                                not because we’re experts on the Photos and Events platforms (we are), <b>but because:</b>
                            </p>
                            <ul>
                                <li>We intimately understand the needs and expectations of freelancers</li>
                                <li>Our approach is rooted in a freelancer-centric mindset</li>
                                <li>We comprehend how freelancing integrates into diverse projects and ecosystems</li>
                                <li>We're fervently committed to fostering innovation in the realm of freelancing and
                                    related technologies."
                                </li>
                            </ul>
                            <Link className='btn'>Book your Place now</Link>
                        </div>
                    </div>
                </div>
                <div className="Service_pt2 Deal">
                    <div className="Service_pt2_Descriptions">
                        <div className="Service_pt2_Descriptions_paragraphs">
                            <h2>Client Deals</h2>
                            <p>At CameraMan, we excel in solving challenges for our clients by connecting them
                                seamlessly with skilled camera professionals. Our focus is dedicated to enhancing your
                                events through our curated freelance network.
                            </p>
                            <p> We consistently deliver meaningful outcomes for clients,
                                not only because we're experts in the field, <b>but because:</b>
                            </p>
                            <ul>
                                <li>We deeply understand the unique requirements of different events</li>
                                <li>Our approach is grounded in tailoring services to make each event exceptional</li>
                                <li>We comprehend how to seamlessly integrate our services into various event scenarios</li>
                                <li>We're passionately committed to bringing innovation to the event photography experience
                                    through our network of freelance professionals."
                                </li>
                            </ul>
                            <Link className='btn'>Book Your Session Now</Link>

                        </div>
                        <motion.img src={ClientVector} alt="..." initial={{ opacity: 0, y: 50 }}
                            loading='lazy'
                            animate={InView2 && { opacity: 1, y: 0 }} ref={ref2}
                            transition={{ duration: 0.8, type: "tween" }} />
                    </div>
                </div>
                <div className="Service_pt2">
                    <div className="Service_pt2_Descriptions">
                        <motion.img src={EventVector} alt="..." initial={{ opacity: 0, y: 50 }}
                            loading='lazy'
                            animate={InView3 && { opacity: 1, y: 0 }} ref={ref3}
                            transition={{ duration: 0.8, type: "tween" }} />
                        <div className="Service_pt2_Descriptions_paragraphs">
                            <h2>Events Recording</h2>
                            <p>At CameraMan, we specialize in making events unforgettable by connecting you with our
                                team of skilled camera professionals. Our focus is dedicated to tailoring photography services
                                for weddings, corporate events, and more.
                            </p>
                            <p>We consistently deliver meaningful outcomes for events, not just because we understand the intricacies of capturing moments,
                                <b>but because:</b>
                            </p>
                            <ul>
                                <li>We intimately understand the needs and expectations of freelancers</li>
                                <li>Our approach is rooted in a freelancer-centric mindset</li>
                                <li>We comprehend how freelancing integrates into diverse projects and ecosystems</li>
                                <li>We're fervently committed to fostering innovation in the realm of freelancing and
                                    related technologies."
                                </li>
                            </ul>
                            <Link className='btn'>Call Us For Event Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}