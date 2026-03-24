import type { Metadata } from "next";
import { Space_Grotesk, Outfit } from "next/font/google";
import "./modern-design-system.css";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/context/theme-context";
import { NavbarProvider } from "@/context/navbar-context";
import { ScrollToTop } from "@/components/scroll-to-top";

// Define fonts with variables
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zeus Power International (Pvt) Ltd | Emergency Technical Services Sri Lanka",
  description: "Sri Lanka's premier 24/7 technical services provider. Specializing in emergency electrical breakdowns, fire detection/protection, and air-conditioning systems. Call +94 (70) 303 7037.",
  keywords: [
    "Zeus Power International", 
    "ZPI", 
    "Emergency Electrical Breakdown Sri Lanka", 
    "Fire Detection Sri Lanka", 
    "Air-Conditioning Systems", 
    "Technical Services Colombo",
    "Solar Services Sri Lanka"
  ],
  authors: [{ name: "Zeus Power International" }],
  creator: "Zeus Power International",
  publisher: "Zeus Power International",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/images/logo.webp', type: 'image/webp' }
    ]
  },
  openGraph: {
    title: 'Zeus Power International | Emergency Breakdown Services',
    description: '24/7 technical services provider. Specializing in emergency electrical breakdowns, fire detection/protection, and air-conditioning systems in Sri Lanka.',
    url: 'https://www.zeuspower.lk',
    siteName: 'Zeus Power International',
    images: [
      {
        url: '/images/logo.webp',
        width: 800,
        height: 600,
        alt: 'Zeus Power International Logo'
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zeus Power International',
    description: '24/7 technical services in Sri Lanka for electrical, fire, and AC systems.',
    images: ['/images/logo.webp'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Zeus Power International (Pvt) Ltd',
    image: 'https://www.zeuspower.lk/images/logo.webp',
    description: 'Emergency electrical breakdowns and services in electrical systems, fire detection/protection, and air-conditioning systems.',
    '@id': 'https://www.zeuspower.lk',
    url: 'https://www.zeuspower.lk',
    telephone: '+94703037037',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '655/1, Gunathilaka Gardens, Elvitigala Mawatha',
      addressLocality: 'Colombo 05',
      addressCountry: 'LK'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        opens: '08:00',
        closes: '18:00'
      }
    ],
    sameAs: [
      'https://www.facebook.com/zpiosrilanka/', // Placeholder examples
      'https://www.linkedin.com/company/zeus-power-international/'
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <NavbarProvider>
            <Navbar />
            {children}
            <ScrollToTop />
          </NavbarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
