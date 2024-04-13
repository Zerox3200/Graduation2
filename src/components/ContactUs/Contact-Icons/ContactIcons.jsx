import { useRef } from 'react';
import './ContactIcons.scss';
import { motion, useInView } from 'framer-motion';

export function ContactIcons({ Logo, Title, desc1, desc2, delayTime }) {
    const ref = useRef(null);
    const InView = useInView(ref, { once: true })
    return (
        <motion.div className="ContactIcons"
            initial={{ opacity: 0, y: 50 }} animate={InView && { opacity: 1, y: 0 }} ref={ref}
            transition={{ duration: 0.5, ease: "easeOut", delay: parseFloat(delayTime) || 0 }}>
            {Logo}
            <h4>{Title}</h4>
            <span>{desc1}</span>
            <span>{desc2}</span>
        </motion.div>
    )
}
