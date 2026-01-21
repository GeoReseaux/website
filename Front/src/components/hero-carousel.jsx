import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    title: "Détection de Réseaux",
    subtitle: "Enterrés",
    description: "Spécialisé en détection et géoréférencement des réseaux souterrains. Sécurisez vos travaux avec nos technologies de pointe non destructives.",
    image: "TOPOGRAPHIE_ET_CARTOGRAPHIE3.webp",
    ctaText: "Demander un devis",
    ctaLink: "#contact",
    ctaSecondaryText: "Nos prestations",
    ctaSecondaryLink: "#pricing"
  },
  {
    id: 2,
    title: "Géoréférencement",
    subtitle: "Précision & Fiabilité",
    description: "Cartographiez avec précision vos infrastructures souterraines et aériennes grâce à nos technologies de géoréférencement avancées et notre expertise.",
    image: "TOPOGRAPHIE_ET_CARTOGRAPHIE3.webp",
    ctaText: "Nous contacter",
    ctaLink: "#contact",
    ctaSecondaryText: "Nos prestations",
    ctaSecondaryLink: "#pricing"
  },
  {
    id: 3,
    title: "Sécurité & Conformité",
    subtitle: "DT-DICT",
    description: "Respect de la réglementation DT-DICT par nos équipes. Sécurisez vos chantiers et évitez les incidents grâce à notre expertise.",
    image: "TOPOGRAPHIE_ET_CARTOGRAPHIE3.webp",
    ctaText: "Nous contacter",
    ctaLink: "#contact",
    ctaSecondaryText: "Documentation",
    ctaSecondaryLink: "#certifications"
  }
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div 
      id="hero"
      className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0">
              {slide.image ? (
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/20 via-background to-background" />
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
            </div>

            <div className="relative z-10 h-full flex items-center">
              <div className="container px-4 md:px-6 mx-auto">
                <div className="max-w-2xl text-white">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    {slide.title}{' '}
                    <span className="text-primary">{slide.subtitle}</span>
                  </h1>
                  <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-xl">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      asChild
                      size="lg" 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 group"
                    >
                      <a href={slide.ctaLink}>
                        {slide.ctaText}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                    <Button 
                      asChild
                      size="lg" 
                      variant="outline"
                      className="border-white text-black hover:bg-white hover:text-black px-8"
                    >
                      <a href={slide.ctaSecondaryLink}>
                        {slide.ctaSecondaryText}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </Button>
      <Button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </Button>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <Button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  )
}