import './AboutUs.scss';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import PersonIcon from '@mui/icons-material/Person';
import PhotoIcon from '@mui/icons-material/Photo';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';


export function AboutUs() {
    const ref = useRef();
    const InView = useInView(ref, { once: true });
    return (
        <div className="AboutUs container">
            <div className="AboutUs_Desc">
                <div className="AboutUs_Desc_pt2">
                    <div className="AboutUs_Paragraphs">
                        <h2>About Us</h2>
                        <p>
                            Discover diverse expertise at Camera Man,
                            connecting you with skilled freelance cameramen for cinematic storytelling,
                            event coverage, and specialized projects tailored to your vision.
                        </p>
                        <div className="AboutUs_Paragraphs_icons">
                            <PersonIcon />
                            <div className="AboutUs_Paragraphs_icons_text">
                                <span>Look for a CameraMan</span>
                                <p>Discover diverse expertise at Camera Man, connecting you with skilled freelance cameramen for
                                    cinematic storytelling, event coverage, and specialized projects tailored to your vision.</p>
                            </div>
                        </div>
                        <div className="AboutUs_Paragraphs_icons">
                            <CameraAltIcon />
                            <div className="AboutUs_Paragraphs_icons_text">
                                <span>Freelancer CameraMan and Looking for clients</span>
                                <p>Join Camera Man's community for seamless connections and opportunities.
                                    Showcase your skills, communicate effortlessly with clients,
                                    and be part of a platform designed for successful collaborations and professional growth. </p>
                            </div>
                        </div>
                        <div className="AboutUs_Paragraphs_icons">
                            <PhotoIcon />
                            <div className="AboutUs_Paragraphs_icons_text">
                                <span>The Gallary you can get</span>
                                <p>Immerse yourself in our diverse gallery, where clients can preview the exceptional work of
                                    freelance cameramen. From captivating event coverage to stunning cinematic narratives,
                                    find inspiration for your project or showcase your talent as a freelancer.</p>
                            </div>
                        </div>
                    </div>
                    <motion.div className="AboutUs_CameraMan" initial={{ opacity: 0, x: 10 }} ref={ref}
                        animate={InView && { opacity: 1, x: 0 }} transition={{ duration: 0.5, ease: "linear" }}></motion.div>
                </div>
            </div>
        </div>
    )
}