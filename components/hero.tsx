import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-optical.jpg"
          alt="Interior moderno da Ótica Visão Clara"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground/80">
            Óptica & Oftalmologia
          </p>
          <h1 className="font-serif text-4xl leading-tight text-primary-foreground md:text-6xl lg:text-7xl text-balance">
            Cuidar da sua visão é cuidar da sua vida
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-primary-foreground/85">
            Armações exclusivas, lentes de última geração e consultas com
            oftalmologistas especializados. Tudo em um só lugar.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <a
                href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <a href="mailto:contato@visaoclara.com.br?subject=Agendamento de Consulta">
                <Mail className="mr-2 h-5 w-5" />
                Enviar E-mail
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
