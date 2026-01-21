import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle, Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Devis() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    adresse: "",
    codePostal: "",
    ville: "",
    prestations: [],
    hasPlans: false,
    hasDeclarationDT: false,
    informations: ""
  })
  const [files, setFiles] = useState([])
  const [isSubmitted, setIsSubmitted] = useState(false)

  const prestationsOptions = [
    { id: "detection", label: "Détection de réseaux enterrés" },
    { id: "georeferencement", label: "Géoréférencement de réseaux" },
    { id: "investigation", label: "Investigation complémentaire" },
    { id: "marquage", label: "Marquage piquetage" },
    { id: "topographie", label: "Topographie" },
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name, checked) => {
    setFormData(prev => ({ ...prev, [name]: checked }))
    if (name === "hasPlans" && !checked) {
      setFiles([])
    }
  }

  const handlePrestationChange = (prestationId, checked) => {
    setFormData(prev => ({
      ...prev,
      prestations: checked
        ? [...prev.prestations, prestationId]
        : prev.prestations.filter(id => id !== prestationId)
    }))
  }

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files)
    setFiles(prev => [...prev, ...newFiles])
  }

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index))
  }

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("https://api.geo-reseaux.net/devis", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setIsSubmitted(true)
      } else {
        setError(data.message || "Une erreur est survenue")
      }
    } catch (err) {
      setError("Impossible d'envoyer la demande. Veuillez réessayer.")
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center bg-background">
          <motion.div
            className="text-center space-y-4 p-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold">Demande envoyée !</h1>
            <p className="text-muted-foreground max-w-md">
              Merci pour votre demande de devis. Notre équipe vous contactera dans les plus brefs délais.
            </p>
            <Button asChild className="mt-4">
              <a href="/">Retour à l'accueil</a>
            </Button>
          </motion.div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="py-20 bg-background">
          <div className="container px-4 md:px-6 max-w-2xl">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Devis gratuit
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Demandez votre devis
              </h1>
              <p className="text-muted-foreground md:text-lg max-w-xl">
                Remplissez le formulaire ci-dessous et notre équipe vous contactera rapidement avec une proposition adaptée à vos besoins.
              </p>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="rounded-lg border bg-card p-6 space-y-4">
                <h2 className="text-lg font-semibold">Vos coordonnées</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="nom">Nom *</Label>
                    <Input
                      id="nom"
                      name="nom"
                      placeholder="Dupont"
                      value={formData.nom}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="prenom">Prénom *</Label>
                    <Input
                      id="prenom"
                      name="prenom"
                      placeholder="Jean"
                      value={formData.prenom}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="telephone">Téléphone *</Label>
                    <Input
                      id="telephone"
                      name="telephone"
                      type="tel"
                      placeholder="06 12 34 56 78"
                      value={formData.telephone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jean.dupont@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6 space-y-4">
                <h2 className="text-lg font-semibold">Lieu d'intervention</h2>
                <div className="space-y-2">
                  <Label htmlFor="adresse">Adresse *</Label>
                  <Input
                    id="adresse"
                    name="adresse"
                    placeholder="12 rue de la République"
                    value={formData.adresse}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="codePostal">Code postal *</Label>
                    <Input
                      id="codePostal"
                      name="codePostal"
                      placeholder="31000"
                      value={formData.codePostal}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ville">Ville *</Label>
                    <Input
                      id="ville"
                      name="ville"
                      placeholder="Toulouse"
                      value={formData.ville}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Prestations */}
              <div className="rounded-lg border bg-card p-6 space-y-4">
                <h2 className="text-lg font-semibold">Prestations souhaitées</h2>
                <p className="text-sm text-muted-foreground">
                  Sélectionnez les prestations qui vous intéressent (plusieurs choix possibles)
                </p>
                <div className="grid gap-3">
                  {prestationsOptions.map((prestation) => (
                    <div key={prestation.id} className="flex items-center space-x-3">
                      <Checkbox
                        id={prestation.id}
                        checked={formData.prestations.includes(prestation.id)}
                        onCheckedChange={(checked) => handlePrestationChange(prestation.id, checked)}
                      />
                      <Label htmlFor={prestation.id} className="cursor-pointer">
                        {prestation.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6 space-y-6">
                <h2 className="text-lg font-semibold">Documents et déclarations</h2>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="hasPlans"
                      checked={formData.hasPlans}
                      onCheckedChange={(checked) => handleCheckboxChange("hasPlans", checked)}
                    />
                    <Label htmlFor="hasPlans" className="cursor-pointer">
                      J'ai des plans de réseaux à fournir
                    </Label>
                  </div>

                  {formData.hasPlans && (
                    <motion.div
                      className="ml-7 space-y-3"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="border-2 border-dashed border-input rounded-lg p-4 text-center">
                        <input
                          type="file"
                          id="fileUpload"
                          multiple
                          accept=".pdf,.jpg,.jpeg,.png,.dwg,.dxf"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                        <label
                          htmlFor="fileUpload"
                          className="cursor-pointer flex flex-col items-center gap-2"
                        >
                          <Upload className="h-8 w-8 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">
                            Cliquez pour ajouter des fichiers
                          </span>
                          <span className="text-xs text-muted-foreground">
                            PDF, JPG, PNG, DWG, DXF
                          </span>
                        </label>
                      </div>

                      {files.length > 0 && (
                        <div className="space-y-2">
                          {files.map((file, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between bg-muted/50 rounded-md px-3 py-2"
                            >
                              <span className="text-sm truncate max-w-[200px]">{file.name}</span>
                              <button
                                type="button"
                                onClick={() => removeFile(index)}
                                className="text-muted-foreground hover:text-destructive"
                              >
                                <X className="h-4 w-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )}
                </div>

                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="hasDeclarationDT"
                    checked={formData.hasDeclarationDT}
                    onCheckedChange={(checked) => handleCheckboxChange("hasDeclarationDT", checked)}
                  />
                  <Label htmlFor="hasDeclarationDT" className="cursor-pointer">
                    J'ai déjà effectué une déclaration de projet de travaux (DT)
                  </Label>
                </div>
              </div>

              {/* Informations complémentaires */}
              <div className="rounded-lg border bg-card p-6 space-y-4">
                <h2 className="text-lg font-semibold">Informations complémentaires</h2>
                <p className="text-sm text-muted-foreground">
                  Décrivez votre projet, les délais souhaités ou toute autre information utile.
                </p>
                <div className="space-y-2">
                  <Textarea
                    id="informations"
                    name="informations"
                    placeholder="Décrivez votre projet ici..."
                    value={formData.informations}
                    onChange={handleInputChange}
                    rows={5}
                  />
                </div>
              </div>

              {error && (
                <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-destructive text-sm">
                  {error}
                </div>
              )}

              <Button type="submit" size="lg" className="w-full group" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <span className="animate-spin mr-2">⏳</span>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer ma demande de devis
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe concernant votre demande de devis.
              </p>
            </motion.form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
