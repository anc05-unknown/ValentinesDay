import { useState } from 'react'
import HeartCanvas from './components/HeartCanvas'
import HeartLock from './components/HeartLock'
import Proposal from './components/Proposal'
import Wishes from './components/Wishes'
import MusicPlayer from './components/MusicPlayer'

function App() {
    const [step, setStep] = useState('lock') // 'lock', 'proposal' or 'wishes'
    const [isMusicPlaying, setIsMusicPlaying] = useState(false)
    const [isMagicRevealed, setIsMagicRevealed] = useState(false)

    const handleReset = () => {
        setStep('lock')
        setIsMusicPlaying(false)
        setIsMagicRevealed(false)
    }

    const startMagic = () => {
        setIsMusicPlaying(true)
        setIsMagicRevealed(true)
    }

    return (
        <div className="app">
            <HeartCanvas />
            <MusicPlayer isPlaying={isMusicPlaying} />

            <main style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
                {step === 'lock' && (
                    <HeartLock onSuccess={() => setStep('proposal')} />
                )}
                {step === 'proposal' && (
                    <Proposal onAccept={() => setStep('wishes')} />
                )}
                {step === 'wishes' && (
                    <Wishes
                        onReset={handleReset}
                        onMagicReveal={startMagic}
                        isMagicRevealedExternally={isMagicRevealed}
                    />
                )}
            </main>
        </div>
    )
}

export default App
