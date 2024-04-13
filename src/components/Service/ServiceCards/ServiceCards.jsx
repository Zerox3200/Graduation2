import { motion, useInView } from 'framer-motion';
import './ServiceCards.scss';
import { useRef } from 'react';

export function ServiceCards({ Src, Title, Description, Delay }) {
    const ref = useRef();
    const InView = useInView(ref, { once: true })
    return (
        <motion.div className="card" initial={{ opacity: 0, y: 40 }} animate={InView && { opacity: 1, y: 0 }} ref={ref}
            transition={{ duration: 0.8, ease: "easeOut", delay: parseFloat(Delay) }}>
            <div className="card-img">
                <img src={Src} className="card-img-top" alt="..." loading='lazy' />
            </div>
            <div className="card-body">
                <h4>{Title}</h4>
                <p className="card-text">{Description}</p>
            </div>
        </motion.div>
    )
}