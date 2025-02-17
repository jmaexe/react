import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
export default function Home() {
    const [isVisible, setIsVisible] = useState(true)
    return (
        <div style={{ display: "grid", placeContent: "center", placeItems: "center", minHeight: '100vh', backgroundColor: "black", gap: 300 }}>
            {/* <motion.button onClick={() => setIsVisible(!isVisible)}  >click</motion.button> */}
            {/* <AnimatePresence >
                {isVisible &&
                    <motion.div style={{ backgroundColor: 'blue', width: 150, height: 150 }}
                        initial={{ translateX: 0, scale: 0 }}
                        animate={{ translateX: 500, scale: 1 }}
                        exit={{ translateX: 0, scale: 0 }}
                        transition={{ duration: 1 }}
                    >
                        ciao
                    </motion.div>}
            </AnimatePresence> */}
            {/* <motion.div style={{ backgroundColor: 'blue', width: 150, height: 150 }}>
            </motion.div>

            <motion.div style={{ backgroundColor: 'orange', width: 150, height: 150, }}>
            </motion.div>
            <div style={{ backgroundColor: 'purple', width: 350, height: 350, position: 'relative', top: 0, left: 0, zIndex: 50 }}>
                <motion.div style={{ width: 150, height: 150 }} initial={{ opacity: 0, y: 0 }} whileInView={{ backgroundColor: 'white', opacity: 1, y: -100, }} transition={{ duration: 0.5 }}>
                </motion.div>
            </div>

            <motion.div style={{ backgroundColor: 'green', width: 150, height: 150 }}>
            </motion.div> */}
        </div>
    )
}