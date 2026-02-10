import { motion, useScroll, useSpring } from 'framer-motion'
import './ScrollContainer.css'

function ScrollContainer({ children }) {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    return (
        <>
            {/* Scroll Progress Indicator */}
            <motion.div
                className="scroll-progress"
                style={{ scaleX }}
            />

            {/* Scroll Container */}
            <div className="scroll-container">
                {children}
            </div>
        </>
    )
}

export default ScrollContainer
