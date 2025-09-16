import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Globe, Map, Network, Shield, Zap, Search, MapPin, FileCheck, Users, Star, Building, Wrench } from "lucide-react"
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
                    Détection de Réseaux <span className="text-primary">Enterrés</span>
                  </motion.h1>
                  <motion.p
                    className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                  >
                    Spécialistes certifiés en détection et géoréférencement des réseaux souterrains. Sécurisez vos travaux avec nos technologies de pointe non-destructives.
                  </motion.p>
                </div>
                <motion.div
                  className="flex flex-col gap-2 min-[400px]:flex-row"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.7 }}
                >
                  <Button size="lg" className="group">
                    Demander un devis
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Nos services
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Expertise complète en détection de réseaux</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nos équipes certifiées utilisent des technologies de pointe pour cartographier le sous-sol et assurer la sécurité de vos travaux à proximité des réseaux enterrés.
                </p>
              </div>
            </motion.div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <FeatureCard
                icon={<Search className="h-10 w-10 text-primary" />}
                title="Détection géoradar"
                description="Géoradar double-fréquence couplé à un GPS topographique pour un levé géoréférencé en temps réel."
                delay={0.1}
              />
              <FeatureCard
                icon={<MapPin className="h-10 w-10 text-primary" />}
                title="Géoréférencement"
                description="Relevé des coordonnées géographiques (x, y, z) pour connaître avec précision le positionnement des réseaux."
                delay={0.3}
              />
              <FeatureCard
                icon={<Shield className="h-10 w-10 text-primary" />}
                title="Conformité DT-DICT"
                description="Respect des normes en vigueur pour la sécurité à proximité des canalisations et réseaux enterrés."
                delay={0.5}
              />
              <FeatureCard
                icon={<FileCheck className="h-10 w-10 text-primary" />}
                title="Certification Bureau Veritas"
                description="Prestataires certifiés pour les prestations de géoréférencement et détection des réseaux."
                delay={0.2}
              />
              <FeatureCard
                icon={<Network className="h-10 w-10 text-primary" />}
                title="Tous types de réseaux"
                description="Gaz, électricité, télécoms, eau, assainissement, chauffage urbain, fibre optique."
                delay={0.4}
              />
              <FeatureCard
                icon={<Users className="h-10 w-10 text-primary" />}
                title="Équipes spécialisées"
                description="Techniciens expérimentés équipés de matériel de pointe pour des relevés de haute précision."
                delay={0.6}
              />
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
                  Nos Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Services complets de détection</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  De la détection initiale au géoréférencement final, nous vous accompagnons dans tous vos projets.
                </p>
              </div>
            </motion.div>
            <div className="mx-auto grid max-w-6xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <motion.div
                className="flex flex-col items-start space-y-4 rounded-lg border bg-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="rounded-lg bg-primary/10 p-3">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Détection de réseaux enterrés</h3>
                  <p className="text-muted-foreground">
                    Localisation précise de tous types de réseaux : gaz, électricité, télécoms, eau, assainissement, chauffage urbain et fibre optique.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="flex flex-col items-start space-y-4 rounded-lg border bg-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="rounded-lg bg-primary/10 p-3">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Géoréférencement</h3>
                  <p className="text-muted-foreground">
                    Relevé des coordonnées géographiques (x, y, z) conforme à la norme NF S 70 003-3 pour un positionnement précis.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="flex flex-col items-start space-y-4 rounded-lg border bg-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="rounded-lg bg-primary/10 p-3">
                  <Network className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Travaux fibre optique</h3>
                  <p className="text-muted-foreground">
                    Recherche de regards télécom, localisation de points de blocage, débouchage de gaines et création de nouveaux réseaux.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="flex flex-col items-start space-y-4 rounded-lg border bg-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="rounded-lg bg-primary/10 p-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Mise en sécurité</h3>
                  <p className="text-muted-foreground">
                    Investigations complémentaires (IC) et opérations de localisation (OL) pour tous travaux à proximité des réseaux.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="flex flex-col items-start space-y-4 rounded-lg border bg-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="rounded-lg bg-primary/10 p-3">
                  <FileCheck className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Génie civil</h3>
                  <p className="text-muted-foreground">
                    Réalisation de tranchées, pose de chambres de tirage, travaux publics et création de réseaux complets.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="flex flex-col items-start space-y-4 rounded-lg border bg-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <div className="rounded-lg bg-primary/10 p-3">
                  <Map className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Plans et récolement</h3>
                  <p className="text-muted-foreground">
                    Implantation et récolement de réseaux, plans d'exécution et DOE classe A pour vos projets.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-muted/50 py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <motion.div
                className="flex flex-col justify-center space-y-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                    Conformité & Certifications
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Respect des normes DT-DICT
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed">
                    Depuis le 1er juillet 2012, le décret DT-DICT encadre les travaux à proximité des réseaux enterrés. Nos équipes certifiées garantissent la conformité de vos projets.
                  </p>
                </div>
                <div className="grid gap-4">
                  <motion.div
                    className="flex items-start gap-3 rounded-lg border bg-background p-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="rounded-full bg-primary/10 p-2">
                      <FileCheck className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Certification Bureau Veritas</h4>
                      <p className="text-sm text-muted-foreground">
                        Certificat 6425522/A-1 pour les prestations de géoréférencement et détection des réseaux.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-start gap-3 rounded-lg border bg-background p-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="rounded-full bg-primary/10 p-2">
                      <Shield className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Norme NF S 70 003-3</h4>
                      <p className="text-sm text-muted-foreground">
                        Travaux de géoréférencement traçables réalisés selon les standards en vigueur.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-start gap-3 rounded-lg border bg-background p-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="rounded-full bg-primary/10 p-2">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Équipes habilitées</h4>
                      <p className="text-sm text-muted-foreground">
                        Techniciens formés et habilités pour intervenir en toute sécurité sur tous types de réseaux.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="rounded-lg border bg-background p-6">
                  <h3 className="text-xl font-bold mb-4">Réseaux concernés par DT-DICT</h3>
                  <div className="grid gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Canalisations de transport d'hydrocarbures et gaz combustibles</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Lignes électriques et réseaux d'éclairage public</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Installations de communications électroniques</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Canalisations d'eau et d'assainissement</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Réseaux de chauffage urbain et vapeur d'eau</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Installations ferroviaires et de transport guidé</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border bg-primary/5 p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">Téléservice Réseaux et Canalisations</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Service gratuit permettant d'identifier les exploitants concernés par vos déclarations DT-DICT.
                  </p>
                  <Button variant="outline" size="sm">
                    Accéder au téléservice
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container px-4 md:px-6">
            <motion.div
              className="text-center space-y-4 mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Témoignages
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ils nous font confiance
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed max-w-3xl mx-auto">
                Découvrez les retours d'expérience de nos clients qui ont fait appel à nos services de détection de réseaux enterrés.
              </p>
            </motion.div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <motion.div
                className="rounded-lg border bg-background p-6 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Building className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      "Intervention rapide et précise pour notre chantier de rénovation urbaine. L'équipe a su identifier tous les réseaux avec une grande précision, évitant ainsi tout risque d'incident."
                    </p>
                    <div className="pt-2">
                      <p className="font-semibold text-sm">Marie Dubois</p>
                      <p className="text-xs text-muted-foreground">Responsable Travaux - Mairie de Lyon</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="rounded-lg border bg-background p-6 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Wrench className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      "Service professionnel et conforme aux normes DT-DICT. Les rapports détaillés nous ont permis de planifier nos travaux en toute sécurité. Je recommande vivement."
                    </p>
                    <div className="pt-2">
                      <p className="font-semibold text-sm">Pierre Martin</p>
                      <p className="text-xs text-muted-foreground">Directeur Technique - BTP Constructions</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="rounded-lg border bg-background p-6 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      "Excellente prestation pour la détection des réseaux électriques sur notre site industriel. Équipe réactive et matériel de pointe. Délais respectés."
                    </p>
                    <div className="pt-2">
                      <p className="font-semibold text-sm">Sophie Leroy</p>
                      <p className="text-xs text-muted-foreground">Chef de Projet - Industrie & Énergie</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="font-semibold">4.9/5</span>
                <span>•</span>
                <span>Plus de 500 chantiers réalisés</span>
                <span>•</span>
                <span>98% de clients satisfaits</span>
              </div>
            </motion.div>
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
                    Technologies de pointe non-destructives
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Nos équipements de détection utilisent les dernières innovations pour des relevés du sous-sol de très haute précision, sans endommager les infrastructures existantes.
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
                    <span>Géoradar haute résolution double-fréquence</span>
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
                    <span>GPS topographique différentiel RTK</span>
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
                    <span>Méthodes photogrammétriques et station totale</span>
                  </motion.li>
                </ul>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <Button size="lg" className="mt-4">
                    Demander une intervention
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
                  <div className="mx-auto text-xs font-medium">Interface de détection Géo-Réseaux</div>
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
                  Besoin de sécuriser vos travaux?
                </h2>
                <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Faites confiance à nos experts certifiés pour la détection et le géoréférencement de vos réseaux enterrés.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="group">
                  Obtenir un devis gratuit
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Nous contacter
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
