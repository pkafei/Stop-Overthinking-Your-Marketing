import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stop Overthinking Your Marketing | Free 90-Minute Consultation',
  description: 'Gain clarity and confidence in your marketing in just 90 minutes. Stop second-guessing every move and focus on what actually works for your business.',
  keywords: 'marketing consultation, business growth, marketing strategy, small business marketing',
  openGraph: {
    title: 'Stop Overthinking Your Marketing',
    description: 'Gain clarity and confidence in your marketing in just 90 minutes.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
