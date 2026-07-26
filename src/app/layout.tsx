import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHeartPulse,
  faAppleWhole,
  faWeightScale,
  faMoon,
  faBuilding,
  faArrowsRotate,
  faBars,
  faXmark,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faChevronRight,
  faChevronLeft,
  faCheck,
  faStar,
  faQuoteLeft,
  faUser,
  faCalendarCheck,
  faClock,
  faArrowRight,
  faArrowLeft,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

/* Prevent Font Awesome from auto-injecting CSS (handled by our import above) */
config.autoAddCss = false;

/* Pre-register icons used across the site via the library pattern */
library.add(
  faHeartPulse,
  faAppleWhole,
  faWeightScale,
  faMoon,
  faBuilding,
  faArrowsRotate,
  faBars,
  faXmark,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faChevronRight,
  faChevronLeft,
  faCheck,
  faStar,
  faQuoteLeft,
  faUser,
  faCalendarCheck,
  faClock,
  faArrowRight,
  faArrowLeft,
  faPlus,
  faMinus
);

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "VitalEdge Health Coaching | Achieve Your Best Self",
    template: "%s | VitalEdge Health Coaching",
  },
  description:
    "Personalized health coaching, nutrition planning, and wellness programs to help you achieve vitality and transform your life.",
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
