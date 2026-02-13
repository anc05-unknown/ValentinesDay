import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { useEffect, useState } from 'react'

const memories = [
    {
        url: '/memory1.jpeg',
        wish: "In your arms, I found my home.",
        angle: -5
    },
    {
        url: '/memory2.jpeg',
        wish: "Every story is beautiful, but ours is my favorite.",
        angle: 5
    }
]

const SurpriseBox = ({ onOpen }) => {
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            style={{
                marginTop: '80px',
                cursor: 'pointer',
                textAlign: 'center',
                perspective: '1000px'
            }}
            onClick={onOpen}
        >
            <div className="gift-container floating">
                <div className="gift-box-premium">
                    <div className="gift-lid-premium"></div>
                    <div className="gift-body-premium"></div>
                    <div className="gift-bow-premium"></div>
                </div>
                <div className="gift-shadow"></div>
            </div>
            <p style={{
                marginTop: '30px',
                color: '#ff3e4e',
                fontStyle: 'italic',
                fontSize: '1.2rem',
                fontWeight: '600',
                textShadow: '0 2px 4px rgba(255, 255, 255, 0.5)'
            }}>
                A final gift for you... Tap to open 🎁
            </p>
        </motion.div>
    )
}

const Wishes = ({ onReset, onMagicReveal, isMagicRevealedExternally }) => {
    const [showFinalSurprise, setShowFinalSurprise] = useState(false)

    useEffect(() => {
        const duration = 15 * 1000
        const animationEnd = Date.now() + duration
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

        const randomInRange = (min, max) => Math.random() * (max - min) + min

        const interval = setInterval(() => {
            const timeLeft = animationEnd - Date.now()

            if (timeLeft <= 0) {
                return clearInterval(interval)
            }

            const particleCount = 50 * (timeLeft / duration)
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } })
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } })
        }, 250)

        return () => clearInterval(interval)
    }, [])

    const handleOpenSurprise = () => {
        // High-end celebration burst
        const count = 200;
        const defaults = {
            origin: { y: 0.7 },
            colors: ['#ff3e4e', '#ff7eb9', '#ffd700', '#ffffff']
        };

        function fire(particleRatio, opts) {
            confetti({
                ...defaults,
                ...opts,
                particleCount: Math.floor(count * particleRatio)
            });
        }

        fire(0.25, { spread: 26, startVelocity: 55 });
        fire(0.2, { spread: 60 });
        fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
        fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
        fire(0.1, { spread: 120, startVelocity: 45 });

        setShowFinalSurprise(true)
    }

    const handleRevealMagic = () => {
        if (onMagicReveal) onMagicReveal()
        // Dramatic confetti burst
        const duration = 5 * 1000;
        const end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#ff3e4e', '#ff7eb9', '#ffffff']
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#ff3e4e', '#ff7eb9', '#ffffff']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            minHeight: '100vh',
            overflowX: 'hidden',
            paddingTop: '60px',
            paddingBottom: '100px'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass"
                style={{
                    padding: 'clamp(20px, 5vw, 60px)',
                    maxWidth: '1000px',
                    width: '95%',
                    textAlign: 'center',
                    marginBottom: '50px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                }}
            >
                <motion.h2
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    style={{
                        fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                        color: '#ff3e4e',
                        marginBottom: '20px',
                        fontFamily: "'Dancing Script', cursive",
                        fontWeight: '700',
                        textShadow: '0 2px 4px rgba(255, 255, 255, 0.8)'
                    }}
                >
                    Happy Valentine's Day!
                </motion.h2>
                <div style={{
                    fontSize: '1.2rem',
                    lineHeight: '1.8',
                    color: '#2c1810',
                    marginBottom: '20px',
                    fontWeight: '400',
                    textAlign: 'left',
                    padding: '0 20px'
                }}>
                    <p style={{ marginBottom: '15px' }}>
                        Hi ra,
                    </p>
                    <p style={{ marginBottom: '15px' }}>
                        First sorry ninna night konchem busy unna gaa chala work unde.
                        Thelusu ippudu kuda exam busy lo untav kani naakosam oka 5 minutes spend chey chalu.
                    </p> 
                    <p style={{ marginBottom: '15px' }}>
                        Nanaaa,
                        Em cheppalo theliyadam ledhu kani okati aithe cheppagalanu neetho godava padina prathi sari vaddu idhi set kaadhu ani mataku anta kaani sare thanu vaddu le next enti ani naatho nenu adigithe I dont Have any answer akkade naaku okati artham ayyindhi naa ee life  ane journey lo chivari daaka neethone undali ani.
                        Oka vishayam cheppali ra kopam ekkuva eppudu pani chesthu untadu ani vadileyaku ra naa bangaram bujji nuvvu
                        Naaku nuvvu neeku nenu antu kalakalam undam ra bujji....
                    </p>
                    <p style={{ color: '#fb6f92', fontStyle: 'italic', fontWeight: '600', textAlign: 'center' }}>
                        Finally naaku ee valentines day la meedha nammakam ledhu I LOVE U each and every day. kani nee kosam HAPPY VALENTINES DAY Dear❤️💞
                    </p>
                </div>
            </motion.div>

            <div className="gallery-grid" style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: 'clamp(20px, 4vw, 50px)',
                width: '100%',
                maxWidth: '1000px',
                marginBottom: '40px',
                padding: '0 10px'
            }}>
                {memories.map((memory, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50, rotate: 0 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            rotate: memory.angle,
                            transition: { delay: 0.5 + index * 0.3, type: 'spring' }
                        }}
                        whileHover={{
                            scale: 1.1,
                            rotate: 0,
                            zIndex: 10,
                            transition: { duration: 0.3 }
                        }}
                        className="polaroid"
                        style={{
                            width: 'min(300px, 90vw)',
                            margin: '0 auto'
                        }}
                    >
                        <div className="polaroid-image-container">
                            <img src={memory.url} alt="Memory" className="polaroid-image" />
                        </div>
                        <div className="polaroid-caption">
                            <p>{memory.wish}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {!showFinalSurprise ? (
                <SurpriseBox onOpen={handleOpenSurprise} />
            ) : (
                <motion.div
                    initial={{ scale: 0, opacity: 0, rotateY: 90 }}
                    animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                    transition={{ type: 'spring', damping: 12, stiffness: 100 }}
                    className="letter-container"
                    style={{ width: '95%' }}
                >
                    <div className="letter-paper glass">
                        <div className="letter-header">
                            <span className="wax-seal">⭐</span>
                        </div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 2 }}
                            className="letter-content"
                        >
                            <h3 style={{
                                fontFamily: "'Dancing Script', cursive",
                                fontSize: '2.5rem',
                                color: '#ffd700',
                                marginBottom: '20px'
                            }}>
                                To My Forever
                            </h3>
                            <p style={{ fontSize: '1.3rem', lineHeight: '2', color: 'rgba(186, 77, 125, 1)' }}>
                                You are the dream I never want to wake up from.<br />
                                In the quiet moments and the loud celebrations,<br />
                                It's always you. Today, and every day after,<br />
                                <strong>I choose you.</strong>
                            </p>
                            <div className="letter-footer">
                                With all my love, Always 💖
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}

            {!isMagicRevealedExternally ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    style={{ marginTop: '80px' }}
                >
                    <button
                        className="btn btn-secondary shimmer"
                        onClick={handleRevealMagic}
                        style={{
                            padding: '15px 40px',
                            fontSize: '1.2rem',
                            borderRadius: '50px',
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: '2px solid #ff3e4e'
                        }}
                    >
                        Reveal the Magic ✨
                    </button>
                </motion.div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,194,209,1) 100%)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1000,
                        padding: '20px',
                        paddingBottom: '60px'
                    }}
                >
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={{ fontSize: '10rem', marginBottom: '20px' }}
                    >
                        💖
                    </motion.div>
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        style={{
                            fontFamily: "'Dancing Script', cursive",
                            fontSize: 'clamp(3rem, 12vw, 7rem)',
                            color: '#ff3e4e',
                            textAlign: 'center',
                            textShadow: '0 4px 15px rgba(255, 62, 78, 0.4)'
                        }}
                    >
                        I LOVE YOU
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        style={{
                            fontSize: '1.5rem',
                            color: '#ff7eb9',
                            fontStyle: 'italic',
                            marginTop: '20px',
                            fontWeight: '600'
                        }}
                    >
                        forever & always
                    </motion.p>
                </motion.div>
            )}
        </div>
    )
}

export default Wishes
