import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Mariana Souza",
    text: "Excelente atendimento! A Dra. Ana foi super atenciosa e encontrou o problema que nenhum outro médico havia detectado. Recomendo de olhos fechados.",
    rating: 5,
  },
  {
    name: "Pedro Henrique Lima",
    text: "Fiz meus óculos na Visão Clara e a qualidade é incomparável. O atendimento é diferenciado, desde a consulta até a entrega dos óculos prontos.",
    rating: 5,
  },
  {
    name: "Fernanda Oliveira",
    text: "Ambiente muito agradável e moderno. Os profissionais são extremamente competentes. Minha família toda se consulta aqui há anos.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Depoimentos
          </p>
          <h2 className="font-serif text-3xl leading-tight text-foreground md:text-4xl text-balance">
            O que nossos pacientes dizem
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-border bg-card">
              <CardContent className="p-8">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={`star-${testimonial.name}-${i}`}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="mb-6 leading-relaxed text-muted-foreground italic">
                  {`"${testimonial.text}"`}
                </p>
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
