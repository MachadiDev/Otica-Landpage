"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta na Visão Clara."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}
