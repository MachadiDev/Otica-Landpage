import Image from "next/image"

const doctors = [
  {
    name: "Dra. Ana Beatriz Moreira",
    specialty: "Oftalmologista - Retina e Vítreo",
    crm: "CRM 123456",
    image: "/images/doctor-1.jpg",
  },
  {
    name: "Dr. Carlos Eduardo Silva",
    specialty: "Oftalmologista - Glaucoma",
    crm: "CRM 234567",
    image: "/images/doctor-2.jpg",
  },
  {
    name: "Dr. Rafael Mendes Costa",
    specialty: "Optometrista - Lentes de Contato",
    crm: "CRO 345678",
    image: "/images/doctor-3.jpg",
  },
]

export function Team() {
  return (
    <section id="equipe" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Nossa Equipe
          </p>
          <h2 className="font-serif text-3xl leading-tight text-foreground md:text-4xl text-balance">
            Profissionais que cuidam de você
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Nossa equipe é formada por especialistas com formação nas melhores
            instituições do país, dedicados a oferecer o melhor atendimento.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <div key={doctor.name} className="group text-center">
              <div className="relative mx-auto mb-6 aspect-[3/4] w-full max-w-xs overflow-hidden rounded-lg">
                <Image
                  src={doctor.image || "/placeholder.svg"}
                  alt={`Foto de ${doctor.name}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {doctor.name}
              </h3>
              <p className="mt-1 text-sm text-primary">{doctor.specialty}</p>
              <p className="mt-1 text-xs text-muted-foreground">{doctor.crm}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
