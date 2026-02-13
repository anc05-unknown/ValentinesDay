import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const Proposal = ({ onAccept }) => {
    const [noPosition, setNoPosition] = useState({ x: 0, y: 0 })

    const moveButton = () => {
        // Safe area boundaries (80% of viewport to keep button away from edges)
        const marginX = window.innerWidth * 0.15
        const marginY = window.innerHeight * 0.15

        const maxX = window.innerWidth - marginX * 2
        const maxY = window.innerHeight - marginY * 2

        // Generate position relative to the center
        const randomX = (Math.random() * maxX) - (maxX / 2)
        const randomY = (Math.random() * maxY) - (maxY / 2)

        setNoPosition({ x: randomX, y: randomY })
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            textAlign: 'center',
            padding: '20px',
            overflow: 'hidden'
        }}>
            <motion.div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 'clamp(20px, 5vw, 40px)',
                    width: '95%',
                    maxWidth: '800px'
                }}
            >
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{ marginBottom: '20px' }}
                >
                    <Heart size={120} color="#ff3e4e" fill="#ff3e4e" style={{ filter: 'drop-shadow(0 0 20px rgba(255, 62, 78, 0.6))' }} />
                </motion.div>

                <motion.h1
                    style={{
                        fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
                        margin: '20px 0',
                        color: '#ff3e4e',
                        textShadow: '0 2px 10px rgba(255, 62, 78, 0.2)',
                        background: 'linear-gradient(to bottom, #ff3e4e, #ff7eb9)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontFamily: "'Dancing Script', cursive",
                        fontWeight: '700'
                    }}
                >
                    Do you love me?
                </motion.h1>

                <div style={{
                    position: 'relative',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '20px',
                    marginTop: '40px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%'
                }}>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="btn btn-primary shimmer"
                        onClick={onAccept}
                        style={{
                            padding: 'clamp(12px, 3vw, 15px) clamp(30px, 8vw, 50px)',
                            fontSize: 'clamp(1rem, 4vw, 1.2rem)',
                            borderRadius: '50px',
                            zIndex: 1
                        }}
                    >
                        Yes, I do! 💖
                    </motion.button>

                    <motion.button
                        animate={{
                            x: noPosition.x,
                            y: noPosition.y
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 20
                        }}
                        className="btn btn-secondary"
                        onMouseEnter={moveButton}
                        onClick={moveButton}
                        style={{
                            padding: 'clamp(12px, 3vw, 15px) clamp(30px, 8vw, 50px)',
                            fontSize: 'clamp(1rem, 4vw, 1.2rem)',
                            borderRadius: '50px',
                            zIndex: 2,
                            position: 'relative'
                        }}
                    >
                        No
                    </motion.button>
                </div>

            </motion.div>
        </div>
    )
}

export default Proposal
