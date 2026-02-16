import { Eye } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground py-12 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <a href="#" className="flex items-center gap-2">
              <Eye className="h-6 w-6 text-accent" />
              <span className="font-serif text-lg text-primary-foreground">Visão Clara</span>
            </a>
            <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
              Sua ótica de confiança em Brotas. Cuidando da sua visão com
              excelência há mais de 15 anos.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">
              Navegação
            </h4>
            <nav className="flex flex-col gap-2">
              <a href="#sobre" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Sobre</a>
              <a href="#servicos" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Serviços</a>
              <a href="#equipe" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Equipe</a>
              <a href="#depoimentos" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Depoimentos</a>
              <a href="#contato" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Contato</a>
            </nav>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">
              Serviços
            </h4>
            <nav className="flex flex-col gap-2">
              <span className="text-sm text-primary-foreground/70">Consulta Oftalmológica</span>
              <span className="text-sm text-primary-foreground/70">Exame de Vista</span>
              <span className="text-sm text-primary-foreground/70">Óculos de Grau</span>
              <span className="text-sm text-primary-foreground/70">Lentes de Contato</span>
              <span className="text-sm text-primary-foreground/70">Óculos de Sol</span>
            </nav>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-sm text-primary-foreground/50">
            {'© 2026 Visão Clara Óptica. Todos os direitos reservados.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
