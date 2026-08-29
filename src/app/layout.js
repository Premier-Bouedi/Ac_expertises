import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "AC Expertises et Conseils | Expert-comptable au Maroc",
  description:
    "Cabinet d'expertise comptable et de conseil au Maroc. Comptabilité, fiscalité, paie CNSS et création d'entreprise. Contactez-nous pour un devis gratuit.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${nunito.variable} font-sans min-h-screen bg-white antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
