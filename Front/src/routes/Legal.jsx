import { motion } from "framer-motion"
import { Building2, Globe, Server, Scale, Camera, Copyright, AlertTriangle, Mail } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function MentionsLegales() {
  const sections = [
    {
      icon: Building2,
      title: "1. Éditeur du site",
      intro: "Le présent site est édité par :",
      contactInfo: {
        company: "GÉO-RÉSEAUX",
        owner: "Akki Abderazak",
        address: "3 Rue des pins, 31790 Saint-Jory, France",
        phone: "+33 7 69 80 54 38",
        email: "contact@geo-reseaux.net"
      }
    },
    {
      icon: Scale,
      title: "2. Forme juridique",
      intro: "GÉO-RÉSEAUX est une entreprise spécialisée dans la détection, la topographie et la cartographie des réseaux.",
      items: [
        "SIRET : [Numéro SIRET]",
        "Numéro de TVA intracommunautaire : [Numéro TVA]"
      ],
      outro: "Veuillez nous contacter pour obtenir les informations légales complètes."
    },
    {
      icon: Globe,
      title: "3. Directeur de la publication",
      intro: "Le directeur de la publication du site est :",
      contactInfo: {
        company: "Akki Abderazak",
        role: "Gérant de GÉO-RÉSEAUX"
      }
    },
    {
      icon: Server,
      title: "4. Hébergement",
      intro: "Le site est hébergé par :",
      items: [
        "Hébergeur : [Nom de l'hébergeur]",
        "Adresse : [Adresse de l'hébergeur]",
        "Téléphone : [Téléphone de l'hébergeur]"
      ]
    },
    {
      icon: Copyright,
      title: "5. Propriété intellectuelle",
      intro: "L'ensemble des contenus présents sur ce site (textes, images, logos, graphismes, icônes, vidéos, sons, logiciels, etc.) sont la propriété exclusive de GÉO-RÉSEAUX ou de ses partenaires.",
      items: [
        "Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site est interdite",
        "Toute exploitation non autorisée du site ou de son contenu sera considérée comme constitutive d'une contrefaçon",
        "Les marques et logos reproduits sur le site sont déposés par les sociétés qui en sont propriétaires"
      ]
    },
    {
      icon: Camera,
      title: "6. Crédits",
      intro: "Conception et réalisation du site :",
      items: [
        "Design et développement : GÉO-RÉSEAUX",
        "Photographies : GÉO-RÉSEAUX et banques d'images libres de droits"
      ]
    },
    {
      icon: AlertTriangle,
      title: "7. Limitation de responsabilité",
      intro: "GÉO-RÉSEAUX s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois :",
      items: [
        "GÉO-RÉSEAUX ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition",
        "GÉO-RÉSEAUX décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site",
        "GÉO-RÉSEAUX ne pourra être tenue responsable des dommages directs ou indirects résultant de l'accès ou de l'utilisation du site"
      ],
      outro: "L'utilisateur est seul responsable de l'utilisation qu'il fait des informations présentes sur le site."
    },
    {
      icon: Mail,
      title: "8. Contact",
      intro: "Pour toute question concernant les mentions légales, vous pouvez nous contacter :",
      contactInfo: {
        company: "GÉO-RÉSEAUX",
        email: "contact@geo-reseaux.net",
        phone: "+33 7 69 80 54 38"
      }
    }
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
                Informations légales
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Mentions Légales
              </h1>
              <p className="text-muted-foreground md:text-lg max-w-2xl">
                Conformément aux dispositions des articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l'Économie Numérique (LCEN).
              </p>
            </motion.div>

            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  className="rounded-lg border bg-card p-6 md:p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <section.icon className="h-6 w-6 text-primary flex-shrink-0" />
                    <h2 className="text-xl font-bold">{section.title}</h2>
                  </div>
                  <div className="space-y-3 text-muted-foreground">
                    {section.intro && <p>{section.intro}</p>}

                    {section.items && (
                      <ul className="space-y-2 ml-4">
                        {section.items.map((item, iIndex) => (
                          <li key={iIndex} className="flex items-start gap-3">
                            <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.contactInfo && (
                      <div className="rounded-lg bg-muted/50 p-4 space-y-1">
                        <p className="font-semibold text-foreground">{section.contactInfo.company}</p>
                        {section.contactInfo.owner && <p>Représentant : {section.contactInfo.owner}</p>}
                        {section.contactInfo.role && <p>{section.contactInfo.role}</p>}
                        {section.contactInfo.address && <p>Adresse : {section.contactInfo.address}</p>}
                        {section.contactInfo.phone && (
                          <p>Téléphone : <a href={`tel:${section.contactInfo.phone.replace(/\s/g, '')}`} className="text-primary hover:underline">{section.contactInfo.phone}</a></p>
                        )}
                        {section.contactInfo.email && (
                          <p>E-mail : <a href={`mailto:${section.contactInfo.email}`} className="text-primary hover:underline">{section.contactInfo.email}</a></p>
                        )}
                      </div>
                    )}

                    {section.outro && <p>{section.outro}</p>}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-12 text-center text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <p>Dernière mise à jour : Janvier 2026</p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
