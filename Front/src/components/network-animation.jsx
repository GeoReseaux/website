import { useEffect, useRef } from "react"

export default function NetworkAnimation() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const setCanvasDimensions = () => {
      const container = canvas.parentElement
      if (container) {
        canvas.width = container.clientWidth
        canvas.height = container.clientHeight
      }
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    class Node {
      constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.connected = []
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x < this.radius || this.x > canvas.width - this.radius) this.vx *= -1
        if (this.y < this.radius || this.y > canvas.height - this.radius) this.vy *= -1
      }

      connect(node) {
        if (!ctx) return
        const distance = Math.hypot(this.x - node.x, this.y - node.y)
        const maxDistance = 150

        if (distance < maxDistance) {
          const opacity = 1 - distance / maxDistance
          ctx.beginPath()
          ctx.moveTo(this.x, this.y)
          ctx.lineTo(node.x, node.y)
          ctx.strokeStyle = `rgba(100, 100, 100, ${opacity * 0.5})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }
    }

    const nodes = []
    const numNodes = 20
    const colors = ["#0066FF", "#FF3366", "#33FF66"]

    for (let i = 0; i < numNodes; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const radius = 3
      const color = colors[Math.floor(Math.random() * colors.length)]
      nodes.push(new Node(x, y, radius, color))
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      nodes.forEach(node => {
        node.update()
        node.draw()

        nodes.forEach(otherNode => {
          if (node === otherNode) return
          node.connect(otherNode)
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full bg-gradient-to-br from-background to-muted" />
}
