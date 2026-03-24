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
  title: "Zeus Power International",
  description: "Emergency Electrical Services and Solutions",
  icons: {
    icon: [
      { url: '/images/logo.webp', type: 'image/webp' }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased">
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
