import { useState, useRef, useEffect } from 'react'
import { Music, Music2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const MusicPlayer = ({ isPlaying }) => {
    const audioRef = useRef(null)

    useEffect(() => {
        if (isPlaying && audioRef.current) {
            audioRef.current.play().catch(err => {
                console.log("Playback attempt failed:", err)
            })
        } else if (audioRef.current) {
            audioRef.current.pause()
        }
    }, [isPlaying])

    return (
        <audio
            ref={audioRef}
            src="/music.mpeg"
            loop
        />
    )
}

export default MusicPlayer
