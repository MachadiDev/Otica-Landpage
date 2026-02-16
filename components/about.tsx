import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const highlights = [
  "Mais de 15 anos de experiência",
  "Equipamentos de última geração",
  "Atendimento humanizado e personalizado",
  "Laboratório próprio para lentes",
]

export function About() {
  return (
    <section id="sobre" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/eye-exam.jpg"
              alt="Exame de vista sendo realizado por especialista"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
              Sobre nós
            </p>
            <h2 className="font-serif text-3xl leading-tight text-foreground md:text-4xl text-balance">
              Tradição e inovação para a saúde dos seus olhos
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              A Visão Clara nasceu da paixão por oferecer o melhor em cuidado
              oftalmológico. Combinamos a expertise de profissionais altamente
              qualificados com tecnologia avançada para proporcionar diagnósticos
              precisos e soluções personalizadas para cada paciente.
            </p>
            <ul className="mt-8 flex flex-col gap-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
