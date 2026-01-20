import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Finatti Medicina Diagnóstica | Laboratório de Patologia em Cianorte-PR",
  description: "Seus olhos em cada exame. Laboratório de patologia com credibilidade, agilidade e humanidade. Diagnóstico é cuidado.",
  keywords: ["laboratório", "patologia", "Cianorte", "diagnóstico", "exames", "medicina diagnóstica"],
  authors: [{ name: "Finatti Medicina Diagnóstica" }],
  openGraph: {
    title: "Finatti Medicina Diagnóstica",
    description: "Seus olhos em cada exame. Laboratório de patologia em Cianorte-PR",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${jakarta.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
