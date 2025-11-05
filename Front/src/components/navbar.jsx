import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, Network } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 20)
    })
  }

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full border-b ${
        isScrolled ? "bg-background/80 backdrop-blur-md" : "bg-background"
      } transition-all duration-200`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <Network className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold">Géo-Réseaux</span>
        </Link>
        <nav className="ml-auto hidden gap-6 md:flex">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Accueil
          </Link>
          <Link to="#solutions" className="text-sm font-medium transition-colors hover:text-primary">
            Solutions
          </Link>
          <Link to="#pricing" className="text-sm font-medium transition-colors hover:text-primary">
            Prestations
          </Link>
          <Link to="#testimonials" className="text-sm font-medium transition-colors hover:text-primary">
            Témoignages
          </Link>
        </nav>
        <div className="ml-auto md:ml-4 flex items-center gap-2">
          <Link to="#contact" className={cn(buttonVariants({ variant: "default", size: "default" }), "hidden md:flex")}>
            Contact
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 mt-8">
                <Link to="/" className="text-lg font-medium transition-colors hover:text-primary">
                  Accueil
                </Link>
                <Link to="#solutions" className="text-lg font-medium transition-colors hover:text-primary">
                  Solutions
                </Link>
                <Link to="#pricing" className="text-lg font-medium transition-colors hover:text-primary">
                  Prestations
                </Link>
                <Link to="#testimonials" className="text-lg font-medium transition-colors hover:text-primary">
                  Témoignages
                </Link>
                <Link to="#contact" className="text-lg font-medium transition-colors hover:text-primary">
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}