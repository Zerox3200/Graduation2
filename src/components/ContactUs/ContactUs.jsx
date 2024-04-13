import { ContactIcons } from './Contact-Icons/ContactIcons';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import { motion, useInView } from 'framer-motion';

import './ContactUs.scss';
import { useRef } from 'react';

export function Contact() {
    const ref = useRef(null);
    const InView = useInView(ref, { once: true });
    return (
        <div className="MainContact" id='Contact'>
            <h1>Contact Us</h1>
            <div className="Contact container">
                <div className="ContactUS">
                    <div className="ContactUS_pt1">
                        <ContactIcons Logo={<LocationOnOutlinedIcon />} Title='Address'
                            desc1='A108 Adam Street' desc2='New York, NY 535022' />
                        <ContactIcons Logo={<LocalPhoneOutlinedIcon />} Title='Call Us'
                            desc1='+1 5589 55488 55' desc2='+1 6678 254445 41' delayTime='0.3' />
                        <ContactIcons Logo={<EmailOutlinedIcon />} Title='Email Us'
                            desc1='info@example.com' desc2='contact@example.com' delayTime='0.6' />
                        <ContactIcons Logo={<WatchLaterOutlinedIcon />} Title='Open Hours'
                            desc1='Monday - Friday' desc2='9:00AM - 05:00PM' delayTime='0.9' />
                    </div>
                    <motion.div className="ContactUS_pt2" ref={ref}
                        initial={{ opacity: 0, y: 50 }} animate={InView && { opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: 'linear' }}>
                        <form action="">
                            <input type="text" name="" id="Name" placeholder='Your Name' />
                            <input type="text" name="" id="Email" placeholder='Your Email' />
                            <input type="text" name="" id="Subject" placeholder='Your Email' />
                            <textarea name="" id="Text" cols="30" rows="10" placeholder='Message'></textarea>
                            <button className='btn'>Send Message</button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}