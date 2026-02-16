import { MessageCircle, Mail, MapPin, Clock, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contato" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Contato
          </p>
          <h2 className="font-serif text-3xl leading-tight text-foreground md:text-4xl text-balance">
            Agende sua consulta agora
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Entre em contato conosco pelo WhatsApp ou e-mail para marcar sua
            consulta. Estamos prontos para atendê-lo da melhor forma possível.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Buttons */}
          <div className="flex flex-col gap-6">
            <div className="rounded-lg border border-border bg-card p-8">
              <h3 className="mb-6 text-xl font-semibold text-card-foreground">
                Canais de Atendimento
              </h3>
              <div className="flex flex-col gap-4">
                <Button
                  size="lg"
                  asChild
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 justify-start h-auto py-4"
                >
                  <a
                    href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta na Visão Clara."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-3 h-6 w-6 shrink-0" />
                    <div className="text-left">
                      <span className="block text-base font-semibold">
                        WhatsApp
                      </span>
                      <span className="block text-sm opacity-90">
                        (11) 99999-9999
                      </span>
                    </div>
                  </a>
                </Button>

                <Button
                  size="lg"
                  asChild
                  className="w-full justify-start h-auto py-4"
                >
                  <a href="mailto:contato@visaoclara.com.br?subject=Agendamento de Consulta&body=Olá! Gostaria de agendar uma consulta.">
                    <Mail className="mr-3 h-6 w-6 shrink-0" />
                    <div className="text-left">
                      <span className="block text-base font-semibold">
                        E-mail
                      </span>
                      <span className="block text-sm opacity-90">
                        contato@visaoclara.com.br
                      </span>
                    </div>
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="w-full justify-start h-auto py-4 bg-transparent"
                >
                  <a href="tel:+551133334444">
                    <Phone className="mr-3 h-6 w-6 shrink-0" />
                    <div className="text-left">
                      <span className="block text-base font-semibold text-foreground">
                        Telefone
                      </span>
                      <span className="block text-sm text-muted-foreground">
                        (11) 3333-4444
                      </span>
                    </div>
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6">
            <div className="rounded-lg border border-border bg-card p-8">
              <h3 className="mb-6 text-xl font-semibold text-card-foreground">
                Informações
              </h3>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">Endereço</p>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      Av. Rodolpho Guimarães, 1000 - Centro
                      <br />
                      Brotas - SP, 17382-430
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">
                      Horário de Funcionamento
                    </p>
                    <div className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      <p>Segunda a Sexta: 8h às 19h</p>
                      <p>Sábado: 8h às 13h</p>
                      <p>Domingo: Fechado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d922.93631678552!2d-48.12773270305524!3d-22.28763724781122!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c779818b7f86f1%3A0xcc34dc00c0bc3c95!2s%C3%93tica%20brotense!5e0!3m2!1spt-BR!2sbr!4v1770840021657!5m2!1spt-BR!2sbr"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Visão Clara Óptica"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
