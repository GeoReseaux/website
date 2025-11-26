import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Network, Shield, Zap, Search, MapPin, FileCheck, Users, Star, Building, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HeroCarousel from "@/components/hero-carousel"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <HeroCarousel />

        <section id="pricing" className="scroll-mt-16 bg-background py-20">
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
                  Prestations
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Les prestations Géo-Réseaux</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  De la détection initiale au géoréférencement final, nous vous accompagnons dans tous vos projets.
                </p>
              </div>
            </motion.div>
            <div className="mx-auto grid max-w-6xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3 items-stretch">
              <div className="md:col-span-2 lg:col-span-3 grid gap-8 md:grid-cols-2 justify-center items-stretch">
                <Dialog>
                  <DialogTrigger asChild>
                    <motion.div
                      className="flex flex-col items-start space-y-4 rounded-lg border bg-card p-6 cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      <div className="rounded-lg bg-primary/10 p-3">
                        <Search className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">DETECTION DE RESEAUX ENTERRÉS</h3>
                        <p className="text-muted-foreground">
                          La détection de réseau enterré est une étape cruciale pour sécuriser les travaux publics, éviter les accidents et optimiser les coûts.
                        </p>
                      </div>
                    </motion.div>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>DETECTION DE RESEAUX ENTERRÉS</DialogTitle>
                      <DialogDescription>
                        Aperçu de nos interventions et méthodes de détection.
                      </DialogDescription>
                    </DialogHeader>
                    <Carousel className="w-full">
                      <CarouselContent>
                        <CarouselItem>
                          <img
                            src="/DETECTION_DE_RESEAU_PAR_METHODE_ELECTOMAGNETIQUE.jpg"
                            alt="Méthode électromagnétique"
                            className="w-auto h-auto max-w-[50%] max-h-[50vh] object-contain rounded-lg mx-auto border-2 border-[#225777]"
                            loading="lazy"
                          />
                        </CarouselItem>
                        <CarouselItem>
                          <img
                            src="/DETECTION_DE_RESEAUX_PAR_GEORADAR.jpg"
                            alt="Radar géologique (GPR)"
                            className="w-auto h-auto max-w-[50%] max-h-[50vh] object-contain rounded-lg mx-auto border-2 border-[#225777]"
                            loading="lazy"
                          />
                        </CarouselItem>
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  </DialogContent>
                </Dialog>
                <Dialog>
                  <DialogTrigger asChild>
                    <motion.div
                      className="flex flex-col items-start space-y-4 rounded-lg border bg-card p-6 cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="rounded-lg bg-primary/10 p-3">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">GEOREFERENCEMENT DE RESEAUX ENTERRÉS</h3>
                        <p className="text-muted-foreground">
                          Le géoréférencement des réseaux enterrés est une opération essentielle pour cartographier avec précision les infrastructures souterraines (gaz, électricité, eau, télécoms, assainissement…).
                        </p>
                      </div>
                    </motion.div>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Géoréférencement des réseaux</DialogTitle>
                      <DialogDescription>
                        Exemples de levés et restitutions cartographiques.
                      </DialogDescription>
                    </DialogHeader>
                    <Carousel className="w-full">
                      <CarouselContent>
                        <CarouselItem>
                          <img
                            src="/TOPOGRAPHIE_ET_CARTOGRAPHIE1.jpg"
                            alt="Topographie et cartographie"
                            className="w-auto h-auto max-w-[50%] max-h-[50vh] object-contain rounded-lg mx-auto border-2 border-[#225777]"
                            loading="lazy"
                          />                        
                        </CarouselItem>
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  </DialogContent>
                </Dialog>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <motion.div
                    className="flex flex-col items-start space-y-4 rounded-lg border bg-card p-6 cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="rounded-lg bg-primary/10 p-3">
                      <Network className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">TOPOGRAPHIE ET CARTOGRAPHIE</h3>
                      <p className="text-muted-foreground">
                        La topographie et la cartographie sont deux disciplines complémentaires au cœur des métiers du géoréférencement, de la détection de réseaux et de l’aménagement du territoire.
                      </p>
                    </div>
                  </motion.div>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Topographie & Cartographie</DialogTitle>
                    <DialogDescription>
                      Échantillon de livrables et relevés.
                    </DialogDescription>
                  </DialogHeader>
                  <Carousel className="w-full">
                    <CarouselContent>
                      <CarouselItem className="flex justify-center items-center">
                        <img
                          src="/TOPOGRAPHIE_ET_CARTOGRAPHIE2.jpeg"
                          alt="Topographie et cartographie"
                          className="w-auto h-auto max-w-[50%] max-h-[50vh] object-contain rounded-lg mx-auto border-2 border-[#225777]"
                          loading="lazy"
                        />
                      </CarouselItem>
                      <CarouselItem className="flex justify-center items-center">
                        <img
                          src="/TOPOGRAPHIE_ET_CARTOGRAPHIE3.jpg"
                          alt="Topographie et cartographie"
                          className="w-auto h-auto max-w-[85%] max-h-[65vh] object-contain rounded-lg mx-auto border-2 border-[#225777]"
                          loading="lazy"
                        />
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger asChild>
                  <motion.div
                    className="flex flex-col items-start space-y-4 rounded-lg border bg-card p-6 cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="rounded-lg bg-primary/10 p-3">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">ETUDE DE PROJET ELECTRIQUE ET GAZ</h3>
                      <p className="text-muted-foreground">
                        L’étude de projet est une phase stratégique dans les travaux d’aménagement, de raccordement ou de réhabilitation de réseaux. Chez GEO-RESEAUX, elle s’inscrit dans une démarche rigoureuse mêlant topographie, détection, géoréférencement et cartographie.
                      </p>
                    </div>
                  </motion.div>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Étude de projet</DialogTitle>
                    <DialogDescription>
                      Étapes clés et exemples de dossiers.
                    </DialogDescription>
                  </DialogHeader>
                  <Carousel className="w-full">
                    <CarouselContent>
                      <CarouselItem>
                        <div className="h-64 rounded-lg bg-muted flex items-center justify-center text-sm">Analyse préalable</div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="h-64 rounded-lg bg-muted flex items-center justify-center text-sm">Conception / Plans</div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="h-64 rounded-lg bg-muted flex items-center justify-center text-sm">Validation & conformité</div>
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger asChild>
                  <motion.div
                    className="flex flex-col items-start space-y-4 rounded-lg border bg-card p-6 cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="rounded-lg bg-primary/10 p-3">
                      <FileCheck className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">SECURISATION DES RESEAUX POUR DES TRAVAUX SÛRE</h3>
                      <p className="text-muted-foreground">
                        La sécurisation des réseaux enterrés est une étape incontournable pour garantir des travaux sûrs, conformes à la réglementation et sans risque pour les intervenants ni les infrastructures existantes. GEO-RESEAUX, en tant qu’acteur spécialisé, peut structurer cette mission autour de plusieurs axes :
                      </p>
                    </div>
                  </motion.div>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Sécurisation des réseaux</DialogTitle>
                    <DialogDescription>
                      Procédures et bonnes pratiques.
                    </DialogDescription>
                  </DialogHeader>
                  <Carousel className="w-full">
                    <CarouselContent>
                      <CarouselItem>
                        <div className="h-64 rounded-lg bg-muted flex items-center justify-center text-sm">Repérage & marquage</div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="h-64 rounded-lg bg-muted flex items-center justify-center text-sm">Signalisation chantier</div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="h-64 rounded-lg bg-muted flex items-center justify-center text-sm">Contrôles et rapports</div>
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>

        <section id="testimonials" className="scroll-mt-16 bg-muted/50 py-20">
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

        <section className="py-20">
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
                  <div className="grid md:grid-cols-2 gap-6 text-sm">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Gaz combustibles hydrocarbure</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Produits chimiques</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Électricté BT, HTA, HTB, 1 feux tricolores, éclairage public</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Installations ferroviaires ou guidées</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Chauffage et climatisation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Transport de déchets par dispositif</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Digues de submersion & d'innondations</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Assainissement et pluvial</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Télécommunications</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Eau potable</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border bg-primary/5 p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">Téléservice Réseaux et Canalisations</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Service gratuit permettant d'identifier les exploitants concernés par vos déclarations DT-DICT.
                  </p>
                  <a href="https://www.reseaux-et-canalisations.ineris.fr/gu-presentation/construire-sans-detruire/teleservice-reseaux-et-canalisations.html" target="_blank" rel="noopener noreferrer" className="inline-block rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                    Accéder au téléservice
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-16 bg-primary text-primary-foreground py-20">
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
