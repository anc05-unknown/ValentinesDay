import { useEffect, useRef } from 'react'

const HeartCanvas = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let hearts = []
        let animationFrameId

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        class Heart {
            constructor() {
                this.reset()
            }

            reset() {
                this.x = Math.random() * canvas.width
                this.y = canvas.height + 20
                this.size = Math.random() * 15 + 5
                this.speed = Math.random() * 1.5 + 0.5
                this.opacity = Math.random() * 0.5 + 0.2
                this.drift = Math.random() * 2 - 1
            }

            draw() {
                ctx.save()
                ctx.translate(this.x, this.y)
                ctx.beginPath()
                ctx.moveTo(0, 0)
                ctx.bezierCurveTo(-this.size, -this.size, -this.size * 1.5, this.size / 2, 0, this.size)
                ctx.bezierCurveTo(this.size * 1.5, this.size / 2, this.size, -this.size, 0, 0)
                ctx.fillStyle = `rgba(255, 62, 78, ${this.opacity + 0.1})`
                ctx.fill()
                ctx.restore()
            }

            update() {
                this.y -= this.speed
                this.x += this.drift
                if (this.y < -20) {
                    this.reset()
                }
            }
        }

        const init = () => {
            hearts = Array.from({ length: 50 }, () => new Heart())
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            hearts.forEach(heart => {
                heart.update()
                heart.draw()
            })
            animationFrameId = requestAnimationFrame(animate)
        }

        window.addEventListener('resize', resize)
        resize()
        init()
        animate()

        return () => {
            window.removeEventListener('resize', resize)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                pointerEvents: 'none',
                zIndex: 0,
            }}
        />
    )
}

export default HeartCanvas
