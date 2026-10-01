import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactIcons from "@/components/ContactIcons";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "AC Expertises et Conseils | Expert-comptable",
  description:
    "Cabinet d'expertise comptable et de conseil, casablanca . Comptabilité, fiscalité, paie et création d'entreprise. Contactez-nous pour un devis gratuit.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${nunito.variable} font-sans min-h-screen bg-white antialiased`}>
        <Header />
        <main>{children}</main>
        <div className="fixed bottom-6 right-4 z-40 sm:bottom-8 sm:right-6">
          <ContactIcons className="flex-col" />
        </div>
        <Footer />
      </body>
    </html>
  );
}
