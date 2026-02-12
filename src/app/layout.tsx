import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-be-vietnam-pro",
});

export const metadata: Metadata = {
  title: "Aflatoon - AI WhatsApp Assistant for Restaurants & Service Businesses in Pakistan",
  description:
    "Aflatoon is an AI-powered WhatsApp assistant that takes orders, schedules appointments, and manages deliveries for restaurants, salons, clinics, and service businesses in Pakistan. Available 24/7 in Urdu & English.",
  keywords: [
    "AI WhatsApp assistant",
    "restaurant order management",
    "appointment scheduling Pakistan",
    "WhatsApp bot for business",
    "food delivery automation",
    "AI for restaurants Pakistan",
    "salon booking WhatsApp",
    "clinic appointment AI",
    "Aflatoon AI",
    "business automation Pakistan",
  ],
  metadataBase: new URL("https://aflatoon.ai"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aflatoon - AI WhatsApp Assistant for Restaurants & Service Businesses",
    description:
      "Take orders, schedule appointments, and manage deliveries on WhatsApp with AI. 24/7 support in Urdu & English for restaurants, salons, clinics, and more.",
    url: "https://aflatoon.ai",
    siteName: "Aflatoon",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo_square.png",
        width: 512,
        height: 512,
        alt: "Aflatoon AI Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aflatoon - AI WhatsApp Assistant for Restaurants & Service Businesses",
    description:
      "Take orders, schedule appointments, and manage deliveries on WhatsApp with AI. 24/7 support in Urdu & English.",
    images: ["/logo_square.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    apple: "/logo_square.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Aflatoon",
    url: "https://aflatoon.ai",
    logo: "https://aflatoon.ai/logo_square.png",
    description:
      "AI-powered WhatsApp assistant for restaurants and service businesses in Pakistan. Takes orders, schedules appointments, and manages deliveries 24/7.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "team@aflatoon.ai",
      availableLanguage: ["English", "Urdu"],
    },
  };

  return (
    <html lang="en" className={`dark ${beVietnamPro.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased font-display bg-background-dark text-gray-200">
        {children}
      </body>
    </html>
  );
}
