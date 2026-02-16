import { Eye, Glasses, ScanEye, Contact, Sun, Stethoscope } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Stethoscope,
    title: "Consulta Oftalmológica",
    description:
      "Avaliação completa da saúde ocular com oftalmologistas experientes e equipamentos de ponta.",
  },
  {
    icon: ScanEye,
    title: "Exame de Vista",
    description:
      "Refração computadorizada e exames complementares para prescrição precisa de grau.",
  },
  {
    icon: Glasses,
    title: "Óculos de Grau",
    description:
      "Ampla variedade de armações de marcas nacionais e importadas com lentes de alta qualidade.",
  },
  {
    icon: Sun,
    title: "Óculos de Sol",
    description:
      "Coleção exclusiva de óculos solares com proteção UV e lentes polarizadas.",
  },
  {
    icon: Contact,
    title: "Lentes de Contato",
    description:
      "Adaptação profissional de lentes de contato para correção visual e estética.",
  },
  {
    icon: Eye,
    title: "Exames Especializados",
    description:
      "Topografia, tonometria, fundoscopia e outros exames para diagnóstico avançado.",
  },
]

export function Services() {
  return (
    <section id="servicos" className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Nossos Serviços
          </p>
          <h2 className="font-serif text-3xl leading-tight text-foreground md:text-4xl text-balance">
            Tudo o que você precisa para enxergar melhor
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card
                key={service.title}
                className="group border-border bg-card transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-card-foreground">
                    {service.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
