import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const SITE_URL = 'https://www.laboratoriofinatti.com.br';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Finatti Medicina Diagnóstica | Laboratório de Patologia em Cianorte-PR',
    template: '%s | Finatti Medicina Diagnóstica'
  },
  description: 'Laboratório de patologia e citopatologia em Cianorte-PR. A resposta que você precisa no tempo que você merece. Histopatologia, citopatologia, imuno-histoquímica e patologia molecular.',
  keywords: [
    'laboratório patologia cianorte',
    'laboratório finatti',
    'citopatologia cianorte',
    'histopatologia',
    'imuno-histoquímica',
    'patologia molecular',
    'exame histopatológico',
    'biópsia cianorte',
    'Dra Izabella Finatti',
    'Dr Guilherme Cerci',
    'laboratório anatomia patológica paraná',
    'exame citológico cianorte',
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
  icons: {
    // /favicon.ico é servido automaticamente a partir de app/favicon.ico
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: 'Finatti Medicina Diagnóstica',
    title: 'Finatti Medicina Diagnóstica | A resposta que você precisa',
    description: 'Laboratório de patologia e citopatologia em Cianorte-PR. Diagnóstico preciso com credibilidade, agilidade e humanidade.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Finatti Medicina Diagnóstica - Laboratório de Patologia em Cianorte-PR',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Finatti Medicina Diagnóstica | Laboratório de Patologia',
    description: 'A resposta que você precisa no tempo que você merece. Cianorte-PR',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: SITE_URL,
  },
  // TODO(cliente): após criar a propriedade no Google Search Console, descomentar
  // e preencher com o código de verificação fornecido.
  // verification: { google: 'CODIGO_DO_SEARCH_CONSOLE' },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": SITE_URL,
  "name": "Finatti Medicina Diagnóstica",
  "description": "Laboratório de patologia e citopatologia em Cianorte-PR. A resposta que você precisa no tempo que você merece.",
  "url": SITE_URL,
  "telephone": "+55-44-99127-2027",
  "email": "finattipatologia@gmail.com",
  "image": `${SITE_URL}/og-image.jpg`,
  "logo": `${SITE_URL}/images/01-laranja.png`,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Espírito Santo, 130 - Zona 1",
    "addressLocality": "Cianorte",
    "addressRegion": "PR",
    "postalCode": "87200-097",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -23.6594,
    "longitude": -52.6052
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "12:00"
    }
  ],
  "priceRange": "$$",
  "medicalSpecialty": ["Pathology", "Cytopathology"],
  "founder": [
    {
      "@type": "Person",
      "name": "Dra. Izabella Finatti Cerci",
      "jobTitle": "Médica Patologista"
    },
    {
      "@type": "Person",
      "name": "Dr. Guilherme Cerci",
      "jobTitle": "Médico e Gestor"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/finattilab/"
  ]
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${jakarta.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
