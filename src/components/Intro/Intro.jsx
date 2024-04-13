import './Intro.scss';
import { motion } from 'framer-motion';

export function Intro() {
    return (
        <div className="Intro">
            <div className="Intro_Title h1">
                <motion.div initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: 'easeInOut' }}>
                    Hello, Welcome in Frame By Frame For freelancing jobs
                </motion.div>
                <motion.button className='btn'
                    initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, ease: 'linear', delay: 0.5 }}>
                    Discover Employers
                </motion.button>
            </div>
        </div>
    )
}