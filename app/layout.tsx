import React from "react"
import type { Metadata, Viewport } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'

import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const dmSerif = DM_Serif_Display({ weight: '400', subsets: ['latin'], variable: '--font-dm-serif' })

export const metadata: Metadata = {
  title: 'Visão Clara Óptica | Óculos, Lentes e Consultas Oftalmológicas',
  description: 'Ótica premium com consultas oftalmológicas, armações de grife, lentes de contato e exames de vista. Agende sua consulta via WhatsApp ou email.',
}

export const viewport: Viewport = {
  themeColor: '#3a7ca5',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${dmSans.variable} ${dmSerif.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
