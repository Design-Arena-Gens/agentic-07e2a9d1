import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mejores Frameworks para Crear Agentes de IA',
  description: 'Comparación de los mejores frameworks y herramientas para construir agentes de inteligencia artificial',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
