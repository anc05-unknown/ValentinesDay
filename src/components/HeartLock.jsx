import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Lock, Key } from 'lucide-react'

const HeartLock = ({ onSuccess }) => {
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isChecking, setIsChecking] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsChecking(true)
        setError('')

        setTimeout(() => {
            if (password.toLowerCase() === '0531') {
                onSuccess()
            } else {
                setError(password ? "That's not the key to my heart... 💔" : "Please enter the secret word! ✨")
                setIsChecking(false)
            }
        }, 800)
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            padding: '20px',
            background: 'radial-gradient(circle, #fff0f3 0%, #ffc2d1 100%)'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass"
                style={{
                    padding: 'clamp(20px, 5vw, 40px)',
                    maxWidth: '400px',
                    width: '95%',
                    textAlign: 'center',
                    boxShadow: '0 20px 50px rgba(255, 62, 78, 0.15)',
                    border: '2px solid rgba(255, 255, 255, 0.5)'
                }}
            >
                <motion.div
                    animate={isChecking ? { scale: [1, 1.2, 1], rotate: [0, 360, 0] } : {}}
                    transition={{ duration: 0.8 }}
                    style={{ marginBottom: '30px' }}
                >
                    <Heart size={80} color="#ff3e4e" fill="#ff3e4e" style={{ filter: 'drop-shadow(0 0 10px rgba(255, 62, 78, 0.3))' }} />
                </motion.div>

                <h1 style={{
                    fontFamily: "'Dancing Script', cursive",
                    fontSize: 'clamp(1.8rem, 8vw, 2.5rem)',
                    color: '#ff3e4e',
                    marginBottom: '25px',
                    fontWeight: '700',
                    lineHeight: '1.2'
                }}>
                    Enter password to come to my heart
                </h1>

                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <div style={{ position: 'relative', marginBottom: '20px' }}>
                        <input
                            type="password"
                            placeholder="Hint: Birth Dates"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '15px 45px',
                                borderRadius: '30px',
                                border: '1px solid rgba(255, 62, 78, 0.2)',
                                background: 'rgba(255, 255, 255, 0.8)',
                                outline: 'none',
                                fontSize: '1rem',
                                color: '#ff3e4e',
                                textAlign: 'center',
                                transition: 'all 0.3s ease'
                            }}
                        />
                        <Lock size={18} color="#ff7eb9" style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)' }} />
                    </div>

                    <AnimatePresence mode="wait">
                        {error && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                style={{
                                    color: '#ff3e4e',
                                    fontSize: '0.9rem',
                                    marginBottom: '20px',
                                    fontWeight: '600'
                                }}
                            >
                                {error}
                            </motion.p>
                        )}
                    </AnimatePresence>

                    <button
                        type="submit"
                        disabled={isChecking}
                        className="btn btn-primary shimmer"
                        style={{
                            width: '100%',
                            padding: '14px',
                            borderRadius: '30px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px',
                            marginTop: !error ? '20px' : '0'
                        }}
                    >
                        {isChecking ? "Opening..." : (
                            <>
                                Unlock My Heart <Key size={18} />
                            </>
                        )}
                    </button>
                </form>
            </motion.div>
        </div>
    )
}

export default HeartLock
