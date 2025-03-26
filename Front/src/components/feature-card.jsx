import { motion } from "framer-motion"

export default function FeatureCard({ icon, title, description, delay = 0 }) {
  return (
    <motion.div
      className="flex flex-col items-center text-center space-y-3 p-6 rounded-xl border bg-background shadow-sm hover:shadow-md transition-all duration-200"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="p-3 rounded-full bg-primary/10">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  )
}
