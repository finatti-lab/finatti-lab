import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://finatti-lab.vercel.app'),
  title: {
    default: 'Finatti Medicina Diagnóstica | Laboratório de Patologia em Cianorte-PR',
    template: '%s | Finatti Medicina Diagnóstica'
  },
  description: 'Laboratório de patologia e citopatologia em Cianorte-PR. Diagnóstico preciso com propósito, onde cada exame é tratado com credibilidade, agilidade e humanidade. Histopatologia, citologia, imuno-histoquímica e mais.',
  keywords: [
    'laboratório patologia cianorte',
    'medicina diagnóstica cianorte',
    'exame histopatológico',
    'citopatologia',
    'imuno-histoquímica',
    'biópsia',
    'Dra Izabella Finatti',
    'laboratório de anatomia patológica',
    'exames patológicos paraná'
  ],
  authors: [{ name: 'Finatti Medicina Diagnóstica' }],
  creator: 'Finatti Medicina Diagnóstica',
  publisher: 'Finatti Medicina Diagnóstica',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://finatti-lab.vercel.app',
    siteName: 'Finatti Medicina Diagnóstica',
    title: 'Finatti Medicina Diagnóstica | Seus olhos em cada exame',
    description: 'Laboratório de patologia em Cianorte-PR. Diagnóstico preciso com credibilidade, agilidade e humanidade.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Finatti Medicina Diagnóstica - Laboratório de Patologia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Finatti Medicina Diagnóstica | Laboratório de Patologia',
    description: 'Diagnóstico preciso com propósito em Cianorte-PR',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'adicionar-codigo-depois',
  },
  alternates: {
    canonical: 'https://finatti-lab.vercel.app',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Finatti Medicina Diagnóstica",
              "description": "Laboratório de patologia e citopatologia em Cianorte-PR",
              "url": "https://finatti-lab.vercel.app",
              "telephone": "+55-44-99127-2027",
              "email": "contato@finatti.com.br",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "R. São Paulo, 2291 - Zona 1",
                "addressLocality": "Cianorte",
                "addressRegion": "PR",
                "postalCode": "87200-000",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -23.6594,
                "longitude": -52.6052
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00"
              },
              "priceRange": "$$",
              "medicalSpecialty": ["Pathology", "Cytopathology"],
              "founder": {
                "@type": "Person",
                "name": "Dra. Izabella Finatti Cerci",
                "jobTitle": "Médica Patologista"
              }
            })
          }}
        />
      </head>
      <body className={`${jakarta.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
