import { motion } from "framer-motion"
import { Shield, Eye, Lock, UserCheck, Mail, Clock, FileText, Server } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function PolitiqueConfidentialite() {
  const sections = [
    {
      icon: Eye,
      title: "1. Collecte des données personnelles",
      intro: "Nous collectons les données personnelles que vous nous fournissez volontairement via notre formulaire de demande de devis :",
      items: [
        "Nom et prénom",
        "Adresse e-mail",
        "Numéro de téléphone",
        "Adresse postale (si fournie)",
        "Informations relatives à votre projet (type de prestation, description du besoin)"
      ],
      outro: "Ces données sont nécessaires pour traiter votre demande et vous recontacter."
    },
    {
      icon: FileText,
      title: "2. Finalités du traitement",
      intro: "Vos données personnelles sont utilisées pour :",
      items: [
        "Répondre à vos demandes de devis et d'informations",
        "Vous contacter concernant nos prestations",
        "Assurer le suivi de nos relations commerciales",
        "Respecter nos obligations légales et réglementaires"
      ]
    },
    {
      icon: Lock,
      title: "3. Base légale du traitement",
      intro: "Le traitement de vos données repose sur :",
      items: [
        "Votre consentement lors de la soumission du formulaire",
        "L'exécution de mesures précontractuelles à votre demande",
        "Notre intérêt légitime à développer notre activité commerciale"
      ]
    },
    {
      icon: Clock,
      title: "4. Durée de conservation",
      intro: "Vos données personnelles sont conservées pendant une durée de 3 ans à compter de notre dernier contact.",
      outro: "Passé ce délai, vos données seront supprimées ou anonymisées, sauf obligation légale de conservation plus longue."
    },
    {
      icon: Server,
      title: "5. Destinataires des données",
      intro: "Vos données personnelles sont destinées uniquement à GÉO-RÉSEAUX et ne sont pas transmises à des tiers, sauf :",
      items: [
        "Nos sous-traitants techniques (hébergement, envoi d'e-mails) dans le cadre strict de leurs missions",
        "Les autorités compétentes sur demande légale"
      ],
      outro: "Nous ne vendons ni ne louons vos données personnelles."
    },
    {
      icon: UserCheck,
      title: "6. Vos droits",
      intro: "Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :",
      items: [
        { title: "Droit d'accès", desc: "obtenir une copie de vos données" },
        { title: "Droit de rectification", desc: "corriger vos données inexactes" },
        { title: "Droit à l'effacement", desc: "demander la suppression de vos données" },
        { title: "Droit à la limitation", desc: "restreindre le traitement de vos données" },
        { title: "Droit à la portabilité", desc: "recevoir vos données dans un format structuré" },
        { title: "Droit d'opposition", desc: "vous opposer au traitement de vos données" }
      ],
      outro: "Pour exercer ces droits, contactez-nous à l'adresse indiquée ci-dessous."
    },
    {
      icon: Shield,
      title: "7. Sécurité des données",
      intro: "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre :",
      items: [
        "L'accès non autorisé",
        "La modification ou la divulgation non autorisée",
        "La destruction accidentelle ou illicite"
      ],
      outro: "Nos systèmes sont régulièrement mis à jour et sécurisés."
    },
    {
      icon: Mail,
      title: "8. Contact",
      intro: "Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, vous pouvez nous contacter :",
      contactInfo: {
        company: "GÉO-RÉSEAUX",
        email: "contact@geo-reseaux.net"
      },
      outro: "Vous avez également le droit d'introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés)."
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
                Politique de Confidentialité
              </h1>
              <p className="text-muted-foreground md:text-lg max-w-2xl">
                GÉO-RÉSEAUX s'engage à protéger la vie privée des utilisateurs de son site internet et à assurer la protection des données personnelles collectées.
              </p>
            </motion.div>

            <motion.div
              className="rounded-lg bg-primary/5 border border-primary/20 p-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Shield className="h-6 w-6 text-primary" />
                <span className="font-semibold text-lg">Responsable du traitement</span>
              </div>
              <p className="text-muted-foreground">
                GÉO-RÉSEAUX, représentée par Akki Abderazak, est responsable du traitement des données personnelles collectées sur ce site.
              </p>
            </motion.div>

            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  className="rounded-lg border bg-card p-6 md:p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
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
                            {typeof item === 'string' ? (
                              <span>{item}</span>
                            ) : (
                              <span>
                                <strong className="text-foreground">{item.title}</strong> : {item.desc}
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.contactInfo && (
                      <div className="rounded-lg bg-muted/50 p-4 space-y-1">
                        <p className="font-semibold text-foreground">{section.contactInfo.company}</p>
                        <p>E-mail : <a href={`mailto:${section.contactInfo.email}`} className="text-primary hover:underline">{section.contactInfo.email}</a></p>
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
