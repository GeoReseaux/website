import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Globe, Map, Network, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import NetworkAnimation from "@/components/network-animation"
import FeatureCard from "@/components/feature-card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              <motion.div
                className="flex flex-col justify-center space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="space-y-2">
                  <motion.h1
                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                  >
                    Solutions de Géo-Réseaux <span className="text-primary">Innovantes</span>
                  </motion.h1>
                  <motion.p
                    className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                  >
                    Optimisez votre infrastructure réseau avec notre plateforme de géolocalisation avancée. Simple,
                    efficace et puissante.
                  </motion.p>
                </div>
                <motion.div
                  className="flex flex-col gap-2 min-[400px]:flex-row"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.7 }}
                >
                  <Button size="lg" className="group">
                    Démarrer maintenant
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button variant="outline" size="lg">
                    En savoir plus
                  </Button>
                </motion.div>
              </motion.div>
              <AnimatePresence>
                {isLoaded && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden"
                  >
                    <NetworkAnimation />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        <section className="bg-background py-20">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Fonctionnalités
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Solutions complètes de géo-réseau</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Notre plateforme offre des outils puissants pour gérer, analyser et optimiser vos réseaux
                  géographiques.
                </p>
              </div>
            </motion.div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <FeatureCard
                icon={<Map className="h-10 w-10 text-primary" />}
                title="Cartographie avancée"
                description="Visualisez vos réseaux sur des cartes interactives avec des données en temps réel."
                delay={0.1}
              />
              <FeatureCard
                icon={<Network className="h-10 w-10 text-primary" />}
                title="Analyse de réseau"
                description="Identifiez les points faibles et optimisez la performance de votre infrastructure."
                delay={0.3}
              />
              <FeatureCard
                icon={<Shield className="h-10 w-10 text-primary" />}
                title="Sécurité intégrée"
                description="Protection des données et surveillance continue pour une sécurité optimale."
                delay={0.5}
              />
              <FeatureCard
                icon={<Zap className="h-10 w-10 text-primary" />}
                title="Performance optimisée"
                description="Améliorez la vitesse et la fiabilité de vos connexions réseau."
                delay={0.2}
              />
              <FeatureCard
                icon={<Globe className="h-10 w-10 text-primary" />}
                title="Couverture mondiale"
                description="Gérez vos réseaux à l'échelle internationale avec une précision locale."
                delay={0.4}
              />
              <FeatureCard
                icon={<Network className="h-10 w-10 text-primary" />}
                title="Intégration facile"
                description="Compatible avec vos systèmes existants pour une transition sans effort."
                delay={0.6}
              />
            </div>
          </div>
        </section>

        <section className="bg-muted py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <motion.div
                className="flex flex-col justify-center space-y-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Interface intuitive et puissante
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Notre plateforme combine simplicité d'utilisation et fonctionnalités avancées pour répondre à tous
                    vos besoins de gestion de réseau.
                  </p>
                </div>
                <ul className="grid gap-2">
                  <motion.li
                    className="flex items-center gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/20">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                    <span>Tableau de bord personnalisable</span>
                  </motion.li>
                  <motion.li
                    className="flex items-center gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/20">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                    <span>Rapports détaillés et exportables</span>
                  </motion.li>
                  <motion.li
                    className="flex items-center gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/20">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                    <span>Alertes et notifications en temps réel</span>
                  </motion.li>
                </ul>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <Button size="lg" className="mt-4">
                    Demander une démo
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div
                className="relative overflow-hidden rounded-xl border bg-background p-2"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute top-0 left-0 right-0 h-12 bg-muted/50 backdrop-blur-sm border-b flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mx-auto text-xs font-medium">Tableau de bord Géo-Réseaux</div>
                </div>
                <div className="pt-12 pb-4">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Interface de tableau de bord"
                    className="rounded-lg border shadow-sm w-full h-[300px] md:h-[400px] object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-primary text-primary-foreground py-20">
          <motion.div
            className="container px-4 md:px-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Prêt à optimiser votre réseau?
                </h2>
                <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Rejoignez les entreprises qui transforment leur infrastructure réseau avec notre solution.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="group">
                  Commencer gratuitement
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Contacter les ventes
                </Button>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
