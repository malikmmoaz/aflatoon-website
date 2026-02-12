import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-be-vietnam-pro",
});

export const metadata: Metadata = {
  title: "Aflatoon - AI Assistant for Appointments & Food",
  description: "Your 24/7 WhatsApp Assistant — in Urdu & English",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${beVietnamPro.variable}`}>
      <body className="antialiased font-display bg-background-dark text-gray-200">
        {children}
      </body>
    </html>
  );
}
