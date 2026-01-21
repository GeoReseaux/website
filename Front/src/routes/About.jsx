import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function About() {

  const pillars = [
    "la précision technique, indispensable à la fiabilité des projets,",
    "la transparence dans les échanges et les livrables,",
    "le respect des équipes, des partenaires et des environnements dans lesquels nous intervenons."
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="py-20 bg-background">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                À propos
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                GÉO-RÉSEAUX
              </h1>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
              <motion.div
                className="w-48 sm:w-56 md:w-64 lg:w-[250px] flex-shrink-0 leading-[0]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img
                  src="/image1.webp"
                  alt="GÉO-RÉSEAUX"
                  className="rounded-lg shadow-lg w-full h-auto object-cover border-2 border-primary/20 block align-bottom"
                />
              </motion.div>

              <motion.div
                className="space-y-6 flex-1 text-center lg:text-left"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p className="text-muted-foreground md:text-lg leading-relaxed">
                  <span className="font-semibold text-foreground">GÉO-RÉSEAUX</span> est une entreprise spécialisée dans la détection, la topographie et la cartographie, construite autour d'une idée simple : offrir un travail précis, fiable et profondément ancré dans la réalité du terrain.
                </p>
                <p className="text-muted-foreground md:text-lg leading-relaxed">
                  Chaque intervention est menée avec rigueur, respect des normes et souci du détail, afin de garantir des résultats justes et exploitables.
                </p>
                <p className="text-muted-foreground md:text-lg leading-relaxed">
                  Fondée et dirigée par <span className="font-semibold text-foreground">Akki Abderazak</span>, GÉO-RÉSEAUX s'appuie sur une expertise solide et une connaissance fine des métiers. Cette approche pragmatique permet d'apporter des solutions adaptées, cohérentes et directement opérationnelles, que ce soit pour des projets d'aménagement, d'infrastructures ou d'études techniques.
                </p>
              </motion.div>
            </div>

            <motion.div
              className="mt-16 rounded-lg border bg-card p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-6">Notre engagement repose sur trois piliers :</h2>
              <div className="space-y-4">
                {pillars.map((pillar, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  >
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground md:text-lg">{pillar}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="mt-12 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <p className="text-muted-foreground md:text-lg leading-relaxed">
                Chez GÉO-RÉSEAUX, nous croyons que la qualité se construit sur le terrain, au contact du réel. C'est pourquoi nous privilégions une approche humaine, attentive et réactive, où chaque mission est traitée avec sérieux et professionnalisme.
              </p>
              <div className="rounded-lg bg-primary/5 border border-primary/20 p-6">
                <p className="text-lg font-medium text-primary">
                  Notre ambition : être un partenaire de confiance, capable d'apporter des données précises, une vision claire et une expertise durable au service de vos projets.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
